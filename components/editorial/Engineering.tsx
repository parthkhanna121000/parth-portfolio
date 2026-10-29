import { projects } from "@/data/projects";

const notes: Record<string, string> = {
  "PDF Upload": "The document enters through the Next.js frontend.",
  "Document Processing": "The PDF is parsed into text the backend can work with.",
  "Embeddings / Retrieval": "Gemini embeddings make the document searchable by meaning.",
  "Relevant Context": "Only the passages relevant to the question move forward.",
  Gemini: "The model answers from that context, not from memory alone.",
  "Streaming Response": "Server-Sent Events deliver the answer as it is generated.",
};

export function Engineering() {
  const p = projects.find((x) => x.slug === "pdf-chat-companion");
  if (!p) return null;
  return (
    <section id="engineering" className="ed-eng" aria-labelledby="eng-title">
      <div className="ed-wrap ed-sec">
        <div className="ed-sechead ed-label ed-red"><span>02</span><span>Engineering notes</span></div>
        <div className="ed-eng-grid">
          <div className="ed-eng-text">
            <h2 id="eng-title" className="ed-display ed-h2" style={{ marginBottom: 28 }}>
              How a question becomes a <span className="ed-it">grounded</span> answer.
            </h2>
            <p className="ed-label" style={{ marginBottom: 20 }}>On PDF Chat Companion</p>
            <p className="ed-drop">
              A language model will answer anything, whether or not the answer is in your document. Retrieval-augmented
              generation narrows that gap: the question is matched against the document first, and the model is given
              only what it found.
            </p>
            <p>
              The project is built around that sequence. Each stage hands something smaller and more relevant to the
              next, and the final answer streams back to the reader instead of arriving all at once.
            </p>
            <blockquote className="ed-pull" style={{ marginLeft: 0 }}>
              Answers stay grounded in the document, not in the model’s memory.
            </blockquote>
          </div>

          <figure>
            <ol className="ed-steps">
              {p.flow.map((s, i) => (
                <li key={s}>
                  <span className="ed-label ed-red">{String(i + 1).padStart(2, "0")}</span>
                  <b>{s}</b>
                  <p>{notes[s] ?? ""}</p>
                </li>
              ))}
            </ol>
            <figcaption className="ed-label ed-cap">
              Fig. 4 / Request flow, from upload to streamed answer
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}