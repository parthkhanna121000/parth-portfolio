import Image from "next/image";
import { exploring, site } from "@/data/site";
import { Section, Reveal } from "./ui";

export function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="card h-full p-6">
            <p className="mut font-mono text-xs">Jul 2025 – Aug 2025 · Remote</p>
            <h3 className="mt-2 font-semibold">Web Development Intern, MotionCut</h3>
            <p className="mut mt-3 text-sm">
              Developed responsive web interfaces using HTML5, CSS3, JavaScript, Flexbox, Grid and media queries.
              Implemented JavaScript-based interactions and responsive layouts for desktop and mobile interfaces.
            </p>
            <a
              href={site.certificate}
              target="_blank"
              rel="noreferrer"
              className="grad mt-4 inline-block text-sm"
            >
              View Certificate →
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card h-full p-6">
            <p className="mut font-mono text-xs">2022 – 2026 · Greater Noida, India</p>
            <h3 className="mt-2 font-semibold">IILM University</h3>
            <p className="mut mt-3 text-sm">Bachelor of Technology — Computer Science Engineering</p>
            <p className="mt-2 text-sm">CGPA: 8.05 / 10</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" title="A little about me">
      <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr_1fr]">
        <Reveal>
          <Image
            src="/images/Profile.jpeg"
            alt="Portrait of Parth Khanna"
            width={560}
            height={560}
            className="aspect-square w-full max-w-[280px] rounded-2xl border border-[var(--bd)] object-cover"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mut space-y-4">
            <p>I&apos;m Parth Khanna, a Computer Science Engineering graduate interested in building practical software products.</p>
            <p>My work spans full-stack web development and AI-powered applications, with a focus on React, Next.js, Node.js, databases and modern AI APIs.</p>
            <p>I&apos;m currently strengthening my fundamentals in software engineering, DSA and AI/ML while continuing to build real-world projects.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="mb-3 font-semibold">Currently Exploring</h3>
          <p className="mut mb-4 text-sm">Areas of current learning, not claims of professional expertise.</p>
          <ul className="flex flex-wrap gap-2">
            {exploring.map((e) => (
              <li key={e} className="chip">{e}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}