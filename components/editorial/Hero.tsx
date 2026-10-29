import { site } from "@/data/site";

const issue = [
  { n: "01", t: "Selected work", d: "CollabNex, HireBot, PDF Chat Companion", href: "#work" },
  { n: "02", t: "Engineering notes", d: "How a question becomes a grounded answer", href: "#engineering" },
  { n: "03", t: "Profile", d: "Education, experience and toolkit", href: "#about" },
  { n: "04", t: "Contact", d: "Open to internships and engineering roles", href: "#contact" },
];

export function Hero() {
  return (
    <section className="ed-wrap ed-hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="ed-display ed-h1">
        <span>Thoughtfully built.</span>
        <span>
          Engineered <span className="ed-it" style={{ display: "inline" }}>to matter.</span>
        </span>
      </h1>

      <div className="ed-hero-foot">
        <div>
          <div className="ed-gold-rule" aria-hidden />
          <p className="ed-hero-desc">
            I build digital products by connecting thoughtful interfaces, reliable systems, and practical AI.
          </p>
          <div className="ed-actions">
            <a href="#work" className="ed-btn">Explore Selected Work</a>
            <a href={site.resume} target="_blank" rel="noreferrer" className="ed-link">View Résumé</a>
          </div>
          <p className="ed-label" style={{ marginTop: 32 }}>
            Computer Science Engineering graduate, IILM University, 2026
          </p>
        </div>

        <nav aria-label="In this issue">
          <p className="ed-label ed-red" style={{ marginBottom: 12 }}>In this issue</p>
          <ol className="ed-toc">
            {issue.map((i) => (
              <li key={i.n}>
                <a href={i.href}>
                  <span className="ed-label">{i.n}</span>
                  <span>
                    <b>{i.t}</b>
                    <small>{i.d}</small>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}