import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            What I can{" "}
            <span className="gradient-text">build for you.</span>
          </h2>

          <p className="mt-5 text-slate-400">
            From responsive interfaces to complete full-stack
            applications, I build practical digital solutions
            around real project needs.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-500 hover:bg-white/5"
          >
            Explore all services
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}