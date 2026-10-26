import Image from "next/image";
import Link from "next/link";
import { siGithub, siTelegram } from "simple-icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-20 -z-10 h-48 w-48 rounded-full bg-violet-600/20 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="pointer-events-none absolute right-1/4 top-40 -z-10 h-48 w-48 rounded-full bg-blue-600/20 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="container-custom">
        {/* Always keep text and profile photo side by side */}
        <div className="grid min-h-[calc(100vh-100px)] grid-cols-[minmax(0,1.5fr)_minmax(80px,0.8fr)] items-center gap-3 sm:gap-8 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE: Introduction */}
          <div className="min-w-0">
            {/* Intro */}
            <div className="mb-3 flex min-w-0 items-center gap-2 sm:mb-6 sm:gap-3">
              <span className="h-px w-4 shrink-0 bg-violet-500 sm:w-10" />

              <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-violet-400 min-[380px]:text-[10px] sm:text-sm sm:tracking-[0.3em]">
                Hi, I&apos;m Biruke
              </p>
            </div>

            {/* Main heading */}
            <h1 className="text-2xl font-bold leading-tight tracking-tight min-[380px]:text-3xl sm:text-5xl lg:text-7xl">
              Full Stack
              <br />
              <span className="gradient-text">Developer</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-200 min-[380px]:text-base sm:mt-6 sm:text-2xl">
              Building modern
              <span className="gradient-text">
                {" "}web experiences.
              </span>
            </p>

            {/* Description */}
            <p className="mt-3 max-w-xl text-xs leading-5 text-slate-400 min-[380px]:text-sm sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
              I design and develop fast, scalable and user-friendly
              web applications using modern technologies.
            </p>

            {/* Action buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-4">
              {/* View My Work */}
              <Link
                href="/portfolio"
                className="gradient-button inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-full px-3 py-2 text-[10px] font-semibold text-white transition hover:-translate-y-0.5 min-[380px]:text-[11px] sm:min-h-12 sm:px-7 sm:py-3.5 sm:text-sm"
              >
                View My Work
              </Link>

              {/* Contact Me */}
              <Link
                href="/#contact"
                className="inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-full border border-violet-500/50 bg-violet-500/10 px-3 py-2 text-[10px] font-semibold text-white transition hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-500/20 min-[380px]:text-[11px] sm:min-h-12 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Contact Me
              </Link>

              {/* Download CV */}
              <a
                href="/cv.pdf"
                download="Biruke-CV.pdf"
                className="inline-flex min-h-9 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-violet-500/50 bg-violet-500/10 px-3 py-2 text-[10px] font-semibold text-white transition hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-500/20 min-[380px]:text-[11px] sm:min-h-12 sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-3.5 w-3.5 shrink-0 sm:h-5 sm:w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"
                  />
                </svg>

                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 sm:mt-10">
              <p className="mb-3 text-[11px] text-slate-400 sm:mb-4 sm:text-sm">
                Connect with me
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/biruke-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex min-h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white sm:min-h-10 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 fill-current transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  >
                    <path d={siGithub.path} />
                  </svg>

                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/beruk-asheber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex min-h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white sm:min-h-10 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 fill-current transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM5.69 10.25h2.5v8.75h-2.5Zm4.82 0h2.39v1.2h.03c.33-.63 1.15-1.3 2.37-1.3 2.54 0 3.01 1.67 3.01 3.84v6.01h-2.5v-5.63c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96v5.73h-2.5V10.25Z" />
                  </svg>

                  <span>LinkedIn</span>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/biru_ke21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="group flex min-h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-white sm:min-h-10 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 fill-current transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  >
                    <path d={siTelegram.path} />
                  </svg>

                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Responsive profile photo */}
          <div className="relative mx-auto w-full min-w-0 max-w-md lg:max-w-lg">
            {/* Outer glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/20 blur-xl sm:rounded-[2rem] sm:blur-3xl" />

            {/* Image container */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-1 shadow-2xl sm:rounded-[2rem] sm:p-3">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-950 to-slate-950 sm:rounded-[1.5rem]">
                {/* Profile image and details */}
                <div className="relative z-10 flex w-full flex-col items-center px-1 text-center">
                  <div className="aspect-square w-[78%] max-w-[256px] overflow-hidden rounded-full border-2 border-violet-500/30 shadow-xl shadow-violet-600/30 sm:border-4">
                    <Image
                      src="/images/portfolio.jpg"
                      alt="Biruke - Full Stack Developer"
                      width={500}
                      height={500}
                      priority
                      sizes="(max-width: 379px) 70px, (max-width: 639px) 110px, (max-width: 1023px) 180px, 256px"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="mt-2 text-[9px] font-semibold leading-tight min-[380px]:text-[10px] sm:mt-6 sm:text-lg">
                    Full Stack Developer
                  </p>

                  <p className="mt-1 text-[8px] capitalize text-slate-400 min-[380px]:text-[9px] sm:mt-2 sm:text-sm">
                    Injibara, Ethiopia
                  </p>
                </div>

                {/* Decorative grid */}
                <div className="pointer-events-none absolute inset-0 opacity-10">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}