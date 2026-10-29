import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/ui";

type Copy = { problem: string; contribution: string; decisions: string[]; layout: "feature" | "split" | "rev" };

const copy: Record<string, Copy> = {
  collabnex: {
    layout: "feature",
    problem:
      "Small teams lose track of who owns what, what is blocked and what is overdue. CollabNex keeps tasks, sprints and project blockers in one Kanban workspace.",
    contribution:
      "Built the application end to end: React frontend, Express and MongoDB backend, REST APIs, the drag-and-drop board, sprint tracking and Admin/Member permissions.",
    decisions: [
      "Overdue-task and blocker views surface deadline risk at the project level.",
      "Role-based access separates Admin and Member permissions.",
      "Inputs are validated on both the frontend and the backend.",
    ],
  },
  hirebot: {
    layout: "split",
    problem:
      "Screening resumes by hand is slow and inconsistent. HireBot analyzes resumes for jobseekers and ranks candidates for recruiters.",
    contribution:
      "Built the full stack: React interface, Express REST APIs with JWT authentication, MongoDB models and the Gemini API integration for resume analysis.",
    decisions: [
      "Resume PDFs are processed first, then analyzed for skills and skill gaps.",
      "Analysis comes back as structured feedback rather than free text.",
      "Jobseeker and recruiter workflows are kept separate.",
    ],
  },
  "pdf-chat-companion": {
    layout: "rev",
    problem:
      "Reading a long PDF to find one answer is slow. PDF Chat Companion answers plain-language questions from the document itself.",
    contribution:
      "Built the Next.js and TypeScript frontend, the Express backend, the Gemini embeddings and retrieval pipeline, and the streaming chat.",
    decisions: [
      "Retrieval gives the model relevant context, so answers stay grounded in the uploaded document.",
      "Responses stream over Server-Sent Events.",
      "Conversation history supports multi-turn questions.",
    ],
  },
};

const order = ["collabnex", "hirebot", "pdf-chat-companion"];

function Entry({ p, n }: { p: Project; n: number }) {
  const c = copy[p.slug];
  const hasLive = p.liveDemo !== "#";
  const hasRepo = p.github !== "#";
  return (
    <Reveal>
      <article id={p.slug} className={`ed-proj ed-proj--${c.layout}`} aria-labelledby={`${p.slug}-t`}>
        <header className="ed-proj-head">
          <span className="ed-num" aria-hidden>{String(n).padStart(2, "0")}</span>
          <h3 id={`${p.slug}-t`} className="ed-display ed-h3">{p.title}</h3>
          <p className="ed-sub">{p.subtitle}</p>
        </header>

        <figure className="ed-fig">
          <div className="ed-shot">
            <Image
              src={p.image}
              alt={`${p.title} interface preview`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority={n === 1}
            />
          </div>
          <figcaption className="ed-label ed-cap">Fig. {n} / {p.title} interface</figcaption>
        </figure>

        <div className="ed-proj-body">
          <dl className="ed-dl">
            <div>
              <dt className="ed-label">The problem</dt>
              <dd>{c.problem}</dd>
            </div>
            <div>
              <dt className="ed-label">What I built</dt>
              <dd>{c.contribution}</dd>
            </div>
          </dl>
          <div>
            <dl className="ed-dl">
              <div>
                <dt className="ed-label">Decisions</dt>
                <dd>
                  <ul>{c.decisions.map((d) => <li key={d}>{d}</li>)}</ul>
                </dd>
              </div>
            </dl>
            <p className="ed-meta">{p.technologies.join(" / ")}</p>
            <div className="ed-links">
              <Link href={`/projects/${p.slug}`} className="ed-link ed-red">Read case study</Link>
              {hasLive && <a href={p.liveDemo} target="_blank" rel="noreferrer" className="ed-link" aria-label={`${p.title} live demo`}>Live demo</a>}
              {hasRepo && <a href={p.github} target="_blank" rel="noreferrer" className="ed-link" aria-label={`${p.title} source code on GitHub`}>Source on GitHub</a>}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  const list = order.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as Project[];
  return (
    <section id="work" className="ed-wrap ed-sec" aria-labelledby="work-title">
      <div className="ed-sechead ed-label ed-red"><span>01</span><span>Selected work</span></div>
      <h2 id="work-title" className="ed-display ed-h2" style={{ marginBottom: 24 }}>
        Three applications, from interface to API.
      </h2>
      {list.map((p, i) => <Entry key={p.slug} p={p} n={i + 1} />)}
    </section>
  );
}