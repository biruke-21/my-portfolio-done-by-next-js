import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40">
      <div className="relative h-56 overflow-hidden border-b border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-7">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-violet-400">
            {project.category}
          </span>
          <span className="text-sm text-slate-500">
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
        >
          View on GitHub
          <span className="sr-only">: {project.title}</span>
        </a>
      </div>
    </article>
  );
}