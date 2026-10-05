import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Section, Reveal } from "./ui";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Selected Work"
      sub="A few applications I've designed and built across full-stack development and AI."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.1} className="h-full">
            <ProjectCard p={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}