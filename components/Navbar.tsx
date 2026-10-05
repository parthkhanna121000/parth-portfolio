"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { site } from "@/data/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = ["Home", "Projects", "Skills", "About", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener("scroll", f);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", f);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "border-b border-[var(--bd)] bg-[var(--bg)]/70 backdrop-blur-lg" : ""
      }`}
    >
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} aria-hidden />
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <ul className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`/#${l.toLowerCase()}`}
                aria-current={active === l.toLowerCase() ? "true" : undefined}
                className={
                  active === l.toLowerCase()
                    ? "nav-active"
                    : "mut transition hover:text-[var(--cyan)]"
                }
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a href={site.resume} target="_blank" rel="noreferrer" className="btn btn-s !py-1.5">
              Resume
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <div
        className={`grid overflow-hidden transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr] border-b border-[var(--bd)] bg-[var(--bg)]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 space-y-1 px-5">
          {[...links, "Resume"].map((l) => (
            <li key={l}>
              <a
                onClick={() => setOpen(false)}
                className={`block py-3 ${
                  active === l.toLowerCase() ? "text-[var(--cyan)]" : ""
                }`}
                href={l === "Resume" ? site.resume : `/#${l.toLowerCase()}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}