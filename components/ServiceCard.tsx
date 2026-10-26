import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
}: {
  service: Service;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:bg-violet-600/20" />

      <div className="relative">
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-violet-400">
            {service.number}
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition group-hover:border-violet-500/30 group-hover:text-violet-300">
            →
          </div>
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-white">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {service.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {service.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-2 text-sm font-medium text-violet-400 transition group-hover:text-violet-300">
          Learn more
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

      </div>
    </article>
  );
}