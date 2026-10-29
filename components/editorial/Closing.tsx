import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="ed-dark" aria-labelledby="contact-title">
      <div className="ed-wrap ed-sec" style={{ paddingBottom: 0 }}>
        <div className="ed-sechead ed-label"><span>04</span><span>Contact</span></div>
        <h2 id="contact-title" className="ed-display ed-close-h">
          Have an idea? <span className="ed-it" style={{ color: "var(--gold)" }}>Let’s build it.</span>
        </h2>
        <p className="ed-mut" style={{ maxWidth: "32rem", margin: "28px 0 32px" }}>
          I’m open to software engineering opportunities, internships and selected freelance projects.
        </p>
        <a href={`mailto:${site.email}`} className="ed-mail ed-link">{site.email}</a>
        <div className="ed-close-links">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="ed-link">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="ed-link">GitHub</a>
          <a href={site.resume} target="_blank" rel="noreferrer" className="ed-link">Résumé</a>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ed-foot">
      <p>© {new Date().getFullYear()} Parth Khanna. Full-Stack Engineering / Applied AI.</p>
      <nav aria-label="Footer">
        <a href="#work" className="ed-link">Work</a>
        <a href="#about" className="ed-link">About</a>
        <a href="#contact" className="ed-link">Contact</a>
        <a href="#top" className="ed-link">Back to top</a>
      </nav>
    </footer>
  );
}