const technologies = [
  { name: "Next.js", description: "React Framework" },
  { name: "TypeScript", description: "Type-safe JavaScript" },
  { name: "React", description: "UI Development" },
  { name: "Node.js", description: "Backend Runtime" },
  { name: "PostgreSQL", description: "Relational Database" },
  { name: "Prisma", description: "Database ORM" },
];

export default function Technologies() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Technologies
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Tools I use to build{" "}
            <span className="gradient-text">
              modern products.
            </span>
          </h2>

          <p className="mt-5 text-slate-400">
            I work with modern technologies across frontend,
            backend, databases and deployment.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="glass-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 text-sm font-bold text-violet-300 ring-1 ring-white/10">
                  {technology.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {technology.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {technology.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}