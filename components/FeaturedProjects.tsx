import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="border-t border-white/5 py-24 md:py-32">
      <div className="container-custom">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Featured Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Things I&apos;ve
              <span className="gradient-text"> built.</span>
            </h2>

            <p className="mt-5 text-slate-400">
              A selection of projects that showcase my experience building
              modern web applications.
            </p>
          </div>

        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
