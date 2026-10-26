import Link from "next/link";
import { skills } from "@/data/Skills";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              About Me
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Building useful software with{" "}
              <span className="gradient-text">purpose.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I&apos;m a Full Stack Developer who enjoys turning ideas into
              modern, practical and reliable web applications.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              My Story
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A developer who enjoys{" "}
              <span className="gradient-text">solving problems.</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              I became interested in software development because I enjoy
              understanding how things work and turning ideas into something
              people can actually use.
            </p>
            <p>
              Over time, I&apos;ve worked across frontend and backend
              development, learning how different parts of a web application
              connect together.
            </p>
            <p>
              Today, I focus on building applications with modern technologies
              such as Next.js, TypeScript, React, Node.js, PostgreSQL and Prisma.
            </p>
            <p>
              I&apos;m continuously improving my skills through personal
              projects, practical development and learning from real-world
              problems.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Technologies I <span className="gradient-text">work with.</span>
            </h2>
            <p className="mt-5 text-slate-400">
              A selection of technologies and tools I use to build modern web
              applications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="glass-card rounded-3xl p-7"
              >
                <h3 className="text-xl font-semibold text-white">
                  {skillGroup.category}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skillGroup.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-white/[0.015] py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              My Approach
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              How I approach{" "}
              <span className="gradient-text">development.</span>
            </h2>
            <p className="mt-5 text-slate-400">
              I try to keep development practical, maintainable and focused on
              solving the actual problem.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "I start by understanding the problem, the users and what the application actually needs to accomplish.",
              },
              {
                number: "02",
                title: "Build",
                description:
                  "I build the interface and application logic using technologies that fit the project and its requirements.",
              },
              {
                number: "03",
                title: "Improve",
                description:
                  "I test, refine and improve the application so it is reliable, responsive and easier to maintain.",
              },
            ].map((step) => (
              <div key={step.number} className="glass-card rounded-3xl p-7">
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

      <section className="border-t border-white/5 py-24">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/60 to-blue-950/40 px-6 py-14 text-center md:px-12">
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />
            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
                Let&apos;s Work Together
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
                Have an idea you&apos;d like to{" "}
                <span className="gradient-text">build?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-slate-400">
                Tell me about your project and let&apos;s see how we can turn
                the idea into something useful.
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
