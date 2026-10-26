import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your idea, goals, users and the problem the application needs to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I define the main features, technical requirements, application structure and development priorities.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop the application using technologies that fit the project, focusing on clean code and responsive design.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "After the first version is working, I test, fix issues and refine the application based on feedback.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Services
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              What I can{" "}
              <span className="gradient-text">
                build for you.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I build modern web applications and digital products
              with a focus on useful features, responsive interfaces
              and reliable backend systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/5 py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              What I Do
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Services for{" "}
              <span className="gradient-text">
                real projects.
              </span>
            </h2>

            <p className="mt-5 text-slate-400">
              Whether you need a complete application or help with
              a specific part of your project, I can help build the
              technical foundation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Each Service Includes */}
      <section className="border-t border-white/5 bg-white/[0.015] py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              What You Get
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Built around your{" "}
              <span className="gradient-text">
                project needs.
              </span>
            </h2>

            <p className="mt-5 text-slate-400">
              The exact features depend on the project, but my goal
              is always to create something practical and maintainable.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="glass-card rounded-3xl p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-400 ring-1 ring-violet-500/20">
                UI
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Responsive Interface
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Interfaces that work well across desktop, tablet and
                mobile screen sizes.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-400 ring-1 ring-violet-500/20">
                API
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Backend & APIs
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Server-side functionality and APIs that connect your
                application to its data and business logic.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-400 ring-1 ring-violet-500/20">
                DB
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Database
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Structured data models and database integration using
                technologies such as PostgreSQL and Prisma.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-400 ring-1 ring-violet-500/20">
                🔐
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Authentication
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                User authentication and protected application areas
                when your project requires them.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-400 ring-1 ring-violet-500/20">
                ⚡
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Performance
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Fast pages, efficient application structure and
                practical performance improvements.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-400 ring-1 ring-violet-500/20">
                🚀
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Deployment
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Preparing applications for production and deployment
                using modern hosting platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              My Process
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              From idea to{" "}
              <span className="gradient-text">
                working product.
              </span>
            </h2>

            <p className="mt-5 text-slate-400">
              I keep the development process simple and focused so
              we can move from an idea to a useful product step by step.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="glass-card rounded-3xl p-7"
              >
                <span className="text-sm font-medium text-violet-400">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-24">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/60 to-blue-950/40 px-6 py-14 text-center md:px-12">
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
                Have a Project?
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
                Let&apos;s talk about what you&apos;re{" "}
                <span className="gradient-text">
                  building.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-slate-400">
                Tell me what you&apos;re working on, what you need
                and where you want to take it.
              </p>

              <Link
                href="/contact"
                className="gradient-button mt-8 inline-flex rounded-full px-7 py-3.5 font-semibold"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}