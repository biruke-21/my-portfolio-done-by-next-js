import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    title: "Full Stack Development",
    description:
      "I build complete web applications from responsive interfaces to backend APIs and databases.",
  },
  {
    title: "Clean & Maintainable Code",
    description:
      "I focus on writing code that is organized, readable and easy to maintain as projects grow.",
  },
  {
    title: "Modern User Experiences",
    description:
      "I care about responsive layouts, accessibility, performance and creating interfaces that feel great to use.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Profile Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/20 to-blue-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-950">
                <Image
                  src="/images/image.jpg"
                  alt="Biruke, Full Stack Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>

            
          </div>

          {/* About Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              I build digital{" "}
              <span className="gradient-text">experiences.</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-400 md:text-lg">
              I&apos;m a Full Stack Developer focused on building modern,
              responsive and reliable web applications. I enjoy turning ideas
              and problems into simple, useful digital products.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
              My approach combines thoughtful user interfaces with solid
              backend architecture. I&apos;m constantly learning new
              technologies and improving the way I build software.
            </p>

            <div className="mt-8 space-y-5">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-sm text-violet-400 ring-1 ring-violet-500/20">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {highlight.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="gradient-button rounded-full px-6 py-3 font-semibold"
              >
                More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}