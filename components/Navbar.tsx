"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#technologies" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

type Theme = "dark" | "light";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  // Restore the previously selected theme.
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    const initialTheme: Theme =
      savedTheme === "light" ? "light" : "dark";

    document.documentElement.setAttribute(
      "data-theme",
      initialTheme
    );

    setTheme(initialTheme);
  }, []);

  // Switch between dark and light themes.
  function toggleTheme() {
    const nextTheme: Theme =
      theme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute(
      "data-theme",
      nextTheme
    );

    localStorage.setItem("portfolio-theme", nextTheme);

    setTheme(nextTheme);
  }

  // Close the mobile menu when Escape is pressed.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Return to the top when Home or the logo is clicked.
  function handleHomeClick() {
    setMenuOpen(false);

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav
        className="container-custom relative flex min-h-16 items-center gap-3 py-3 sm:gap-4"
        aria-label="Main navigation"
      >
        {/* Logo: stays on the left */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className="flex shrink-0 items-center gap-2 sm:gap-3"
          aria-label="Biruke home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-lg font-extrabold text-white shadow-lg shadow-violet-500/20 transition-colors duration-300 sm:h-10 sm:w-10">
            B
          </span>

          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            Biruke<span className="text-violet-400">.</span>
          </span>
        </Link>

        {/* Desktop navigation: right aligned with increased spacing */}
        <div className="ml-auto hidden items-center justify-end gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={
                link.name === "Home"
                  ? handleHomeClick
                  : closeMenu
              }
              className="whitespace-nowrap rounded-md text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Theme toggle and mobile menu */}
        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-4">
          {/* Dark / light mode */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 sm:h-10 sm:w-10"
          >
            {theme === "dark" ? (
              /* Sun icon: switch to light mode */
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              /* Moon icon: switch to dark mode */
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition duration-300 hover:border-red-500/50 hover:bg-red-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 lg:hidden"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              /* Close icon */
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={
                    link.name === "Home"
                      ? handleHomeClick
                      : closeMenu
                  }
                  className="flex min-h-11 items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors duration-300 hover:bg-red-500/10 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}