import { Resend } from "resend";

type SendContactEmailParams = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Escape user-submitted text before inserting it into HTML.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: SendContactEmailParams) {
  // Read the latest environment configuration.
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const contactEmail = process.env.CONTACT_EMAIL?.trim();

  // Check required environment variables.
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is missing. Check your .env file."
    );
  }

  if (!contactEmail) {
    throw new Error(
      "CONTACT_EMAIL is missing. Check your .env file."
    );
  }

  // Create the Resend client using your current API key.
  const resend = new Resend(apiKey);

  // Escape submitted values before inserting them into HTML.
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(
    /\r?\n/g,
    "<br>"
  );

  // Send the contact form notification.
  const { data, error } = await resend.emails.send({
    // Keep this testing sender until you verify your own domain.
    from: "Portfolio <onboarding@resend.dev>",

    // This must be your new Gmail address from .env.
    to: [contactEmail],

    // Allows you to reply directly to the person who contacted you.
    replyTo: email,

    subject: `New Portfolio Message: ${subject}`,

    html: `
      <div style="
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #222;
        max-width: 600px;
        margin: auto;
      ">
        <h2>New Message From Your Portfolio</h2>

        <p>
          Someone has submitted the contact form on your portfolio.
        </p>

        <hr />

        <p>
          <strong>Name:</strong> ${safeName}
        </p>

        <p>
          <strong>Email:</strong> ${safeEmail}
        </p>

        <p>
          <strong>Subject:</strong> ${safeSubject}
        </p>

        <h3>Message</h3>

        <div style="
          padding: 15px;
          background-color: #f5f5f5;
          border-radius: 8px;
        ">
          ${safeMessage}
        </div>

        <hr />

        <p style="font-size: 12px; color: #666;">
          This notification was sent by your portfolio contact form.
        </p>
      </div>
    `,

    text: [
      "NEW MESSAGE FROM YOUR PORTFOLIO",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  // Handle errors returned by Resend.
  if (error) {
    console.error("Resend email error:", error);
    throw new Error(
      `Failed to send contact email: ${error.message}`
    );
  }

  // Confirm that Resend returned an email ID.
  if (!data?.id) {
    console.error("Resend did not return an email ID.");
    throw new Error(
      "The email service did not confirm the email request."
    );
  }

  console.log("Contact email accepted by Resend:", data.id);

  return data;
}