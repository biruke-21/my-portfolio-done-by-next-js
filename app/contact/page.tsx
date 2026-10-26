import ContactForm from "@/components/ContactForm";

const contactMethods = [
  {
    title: "Email",
    value: "biruksew2@gmail.com",
    description: "Open Gmail to write me a message.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=biruksew2%40gmail.com&su=Portfolio%20inquiry",
  },
  {
    title: "GitHub",
    value: "GitHub Profile",
    description: "Take a look at my code and projects.",
    href: "https://github.com/biruke-21",
  },
  {
    title: "LinkedIn",
    value: "LinkedIn Profile",
    description: "Connect with me professionally.",
    href: "https://www.linkedin.com/in/beruk-asheber/",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Contact
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Let&apos;s build something{" "}
              <span className="gradient-text">
                together.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="border-t border-white/5 py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact Information */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                Get In Touch
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Have something{" "}
                <span className="gradient-text">
                  in mind?
                </span>
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-400">
                Whether you&apos;re looking to build a new web
                application, improve an existing project or simply
                want to discuss an idea, 
              </p>

              <div className="mt-10 space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={
                      method.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-500">
                          {method.title}
                        </p>

                        <p className="mt-1 font-medium text-white transition group-hover:text-violet-300">
                          {method.value}
                        </p>

                        <p className="mt-2 text-sm text-slate-400">
                          {method.description}
                        </p>
                      </div>

                      <span className="text-xl text-slate-500 transition group-hover:translate-x-1 group-hover:text-violet-400">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Expectations */}
      <section className="border-t border-white/5 bg-white/[0.015] py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Before You Send
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              What to include in your{" "}
              <span className="gradient-text">
                message.
              </span>
            </h2>

            <p className="mt-5 text-slate-400">
              A little context helps me understand your project
              and respond with useful information.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            <div className="glass-card rounded-3xl p-7">
              <span className="text-sm font-medium text-violet-400">
                01
              </span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Your idea
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Tell me what you want to build and what problem the
                project should solve.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <span className="text-sm font-medium text-violet-400">
                02
              </span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Your requirements
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Share the main features, pages or functionality you
                already have in mind.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <span className="text-sm font-medium text-violet-400">
                03
              </span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Your timeline
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                If you have a preferred deadline or launch date,
                include it in your message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}