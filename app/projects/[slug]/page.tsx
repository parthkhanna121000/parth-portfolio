import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Flow, Reveal } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p
    ? { title: `${p.title} — Case Study | Parth Khanna`, description: p.description }
    : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 pt-32">
      <p className="grad text-sm">{p.subtitle}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">{p.title}</h1>
      <p className="mut mt-4 text-lg">{p.description}</p>
      <div className="card mt-10 p-8"><Flow steps={p.flow} /></div>
      <Block t="Technology Stack">
        <ul className="flex flex-wrap gap-2">
          {p.technologies.map((t) => <li key={t} className="chip">{t}</li>)}
        </ul>
      </Block>
      <Block t="Key Features">
        <ul className="grid gap-2 sm:grid-cols-2">
          {p.features.map((f, i) => (
            <Reveal key={f} delay={i * 0.04}><li className="card px-4 py-2.5 text-sm">{f}</li></Reveal>
          ))}
        </ul>
      </Block>
      <Block t="Architecture">
        <p className="mut">The flow above shows the main stages of the application, from user input through processing to the final result.</p>
      </Block>
      <div className="mt-12 flex gap-3">
        <a href={p.github} className="btn btn-s"><Github size={16} />GitHub</a>
        {p.liveDemo !== "#" && (
          <a href={p.liveDemo} className="btn btn-p"><ExternalLink size={16} />Live Demo</a>
        )}
      </div>
    </main>
  );
}

function Block({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-semibold">{t}</h2>
      {children}
    </section>
  );
}