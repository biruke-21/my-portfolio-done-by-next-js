import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Extract and trim submitted values.
    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    // 2. Validate required fields.
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // 3. Validate the name.
    // Supports English and Ethiopic letters, spaces,
    // apostrophes, and hyphens.
    const namePattern =
      /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u;

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { message: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (!namePattern.test(name)) {
      return NextResponse.json(
        {
          message:
            "Please enter a valid name using letters, spaces, apostrophes, or hyphens.",
        },
        { status: 400 }
      );
    }

    // 4. Validate the email address.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length > 254 || !emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 5. Validate the subject.
    if (subject.length < 3 || subject.length > 150) {
      return NextResponse.json(
        { message: "Subject must be between 3 and 150 characters." },
        { status: 400 }
      );
    }

    // 6. Validate the message.
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        {
          message: "Message must be between 10 and 5000 characters.",
        },
        { status: 400 }
      );
    }

    // 7. Save the validated message to PostgreSQL.
    const savedMessage = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    // 8. Attempt to send the email notification.
    // Start with false so success is reported only after sending succeeds.
    let emailSent = false;
    let emailErrorMessage = "";

    try {
      await sendContactEmail({
        name,
        email,
        subject,
        message,
      });

      emailSent = true;
    } catch (error: unknown) {
      emailErrorMessage =
        error instanceof Error
          ? error.message
          : String(error);

      console.error(
        "CONTACT EMAIL FAILED:",
        emailErrorMessage
      );
    }

    // 9. Prepare an honest response.
    let responseMessage: string;

    if (emailSent) {
      responseMessage =
        "Your message has been sent successfully. Thank you!";
    } else if (
      process.env.NODE_ENV === "development" &&
      emailErrorMessage
    ) {
      // Show the actual email error during local development.
      responseMessage = `Email error: ${emailErrorMessage}`;
    } else {
      responseMessage =
        "Your message was saved successfully, but the email notification could not be sent.";
    }

    return NextResponse.json(
      {
        message: responseMessage,
        id: savedMessage.id,
        emailSent,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        message:
          "Your message could not be processed. Please try again later.",
      },
      { status: 500 }
    );
  }
}