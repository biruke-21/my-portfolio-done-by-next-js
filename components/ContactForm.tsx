"use client";
import { FormEvent, useState } from "react";

const NAME_PATTERN = /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u;

export default function ContactForm() {
const [isSubmitting, setIsSubmitting] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
event.preventDefault();

if (isSubmitting) return;

setSuccessMessage("");
setErrorMessage("");

const form = event.currentTarget;
const formData = new FormData(form);

const name = String(formData.get("name") ?? "").trim();
const email = String(formData.get("email") ?? "").trim();
const subject = String(formData.get("subject") ?? "").trim();
const message = String(formData.get("message") ?? "").trim();

// Validate the name before sending the request.
if (name.length < 2 || name.length > 100) {
  setErrorMessage("Name must be between 2 and 100 characters.");
  return;
}

if (!NAME_PATTERN.test(name)) {
  setErrorMessage(
    "Please enter a valid name using letters, spaces, hyphens, or apostrophes. Numbers and symbols are not allowed."
  );
  return;
}

if (email.length > 254) {
  setErrorMessage("Your email address is too long.");
  return;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  setErrorMessage("Please enter a valid email address.");
  return;
}

if (subject.length < 3 || subject.length > 150) {
  setErrorMessage("Subject must be between 3 and 150 characters.");
  return;
}

if (message.length < 10 || message.length > 5000) {
  setErrorMessage("Message must be between 10 and 5000 characters.");
  return;
}

setIsSubmitting(true);

try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    setErrorMessage(
      result.error || "Your message could not be sent. Please try again."
    );
    return;
  }

  setSuccessMessage(
    result.message ||
      "Your message has been sent successfully. Thank you!"
  );

  form.reset();
} catch (error) {
  console.error("Contact form submission error:", error);

  setErrorMessage(
    "Unable to contact the server. Please try again later."
  );
} finally {
  setIsSubmitting(false);
}

};

const inputClass =
"w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500/60 focus:bg-white/[0.05]";

return ( <form
   onSubmit={handleSubmit}
   className="glass-card rounded-3xl p-6 md:p-8"
 > <div className="grid gap-5 sm:grid-cols-2"> <div> <label
         htmlFor="name"
         className="mb-2 block text-sm font-medium text-slate-300"
       >
Name </label>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your full name"
        required
        minLength={2}
        maxLength={100}
        autoComplete="name"
        pattern="[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*"
        title="Use letters, spaces, hyphens, or apostrophes. Numbers and symbols are not allowed."
        onChange={() => {
          setErrorMessage("");
          setSuccessMessage("");
        }}
        className={inputClass}
      />

      <p className="mt-2 text-xs text-slate-500">
        Enter your name using letters only, with spaces or hyphens if needed.
      </p>
    </div>

    <div>
      <label
        htmlFor="email"
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        Email
      </label>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
        maxLength={254}
        autoComplete="email"
        className={inputClass}
      />
    </div>
  </div>

  <div className="mt-5">
    <label
      htmlFor="subject"
      className="mb-2 block text-sm font-medium text-slate-300"
    >
      Subject
    </label>

    <input
      id="subject"
      name="subject"
      type="text"
      placeholder="What would you like to build?"
      required
      minLength={3}
      maxLength={150}
      className={inputClass}
    />
  </div>

  <div className="mt-5">
    <label
      htmlFor="message"
      className="mb-2 block text-sm font-medium text-slate-300"
    >
      Message
    </label>

    <textarea
      id="message"
      name="message"
      rows={6}
      placeholder="Tell me a little about your project..."
      required
      minLength={10}
      maxLength={5000}
      className={`${inputClass} resize-none`}
    />

    <p className="mt-2 text-xs text-slate-500">
      Write between 10 and 5000 characters.
    </p>
  </div>

  {successMessage && (
    <div
      role="status"
      className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
    >
      {successMessage}
    </div>
  )}

  {errorMessage && (
    <div
      role="alert"
      className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
    >
      {errorMessage}
    </div>
  )}

  <button
    type="submit"
    disabled={isSubmitting}
    className="gradient-button mt-6 w-full rounded-xl px-6 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
  >
    {isSubmitting ? "Sending..." : "Send Message"}
  </button>
</form>

);
}
