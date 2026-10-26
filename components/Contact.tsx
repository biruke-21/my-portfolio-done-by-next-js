import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/5 py-24 md:py-32"
      id="contact"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="container-custom">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">great.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            Have an idea, a project or an opportunity you&apos;d like to
            discuss? Send me a message and I&apos;ll get back to you as soon
            as possible.
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              I&apos;m happy to discuss projects, collaboration opportunities,
              internships, and other professional inquiries.
            </p>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-400">
                  @
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <a
                    href="mailto:biruksew2@gmail.com"
                    className="mt-1 block break-all text-sm font-medium text-white transition hover:text-violet-300"
                  >
                    biruksew2@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-400">
                  +
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Injibara, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-4 text-sm font-medium text-slate-300">
                Connect with me
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/biruke-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500/40 hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/beruk-asheber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500/40 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Send me a message
            </h3>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}