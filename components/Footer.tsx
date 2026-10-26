"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear().toString(),
    () => "2026",
  );

  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="container-custom py-14">

        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-sm">
                B
              </span>

              <span>
                Biruke<span className="text-violet-400">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Full Stack Developer building modern, responsive
              and reliable web applications.
            </p>

          
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Connect
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://github.com/biruke-21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="w-fit text-sm text-slate-400 transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/beruk-asheber/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="w-fit text-sm text-slate-400 transition hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=biruksew2%40gmail.com&su=Portfolio%20inquiry&body=Hi%20Biruke%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send an email to Biruke at biruksew2@gmail.com"
                className="w-fit text-sm text-slate-400 transition hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-center">
          <p>
            © {currentYear} Biruke. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}