import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Portfolio
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Things I&apos;ve{" "}
              <span className="gradient-text">built.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              A collection of web applications and digital projects
              built with modern technologies and practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-white/5 py-24">
        <div className="container-custom">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                Selected Work
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                My recent{" "}
                <span className="gradient-text">
                  projects.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400 md:text-right">
              Each project is an opportunity to solve a problem,
              learn something new and improve my development skills.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-t border-white/5 bg-white/[0.015] py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Technology
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Built with{" "}
              <span className="gradient-text">
                modern tools.
              </span>
            </h2>

            <p className="mt-5 text-slate-400">
              My projects use a combination of frontend, backend,
              database and deployment technologies.
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "PostgreSQL",
              "Prisma",
              "REST APIs",
              "Git",
              "Vercel",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-300 transition hover:border-violet-500/40 hover:text-white"
              >
                {technology}
              </span>
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
                Have an Idea?
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
                Let&apos;s build the next{" "}
                <span className="gradient-text">
                  project.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-slate-400">
                If you have an idea or project in mind, I&apos;d be
                happy to hear about it.
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