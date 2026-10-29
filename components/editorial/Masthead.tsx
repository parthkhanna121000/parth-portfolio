import { site } from "@/data/site";

export function Masthead() {
  return (
    <header className="ed-wrap">
      <div className="ed-strip ed-label">
        <span>Portfolio / 2026</span>
        <span className="ed-status">{site.status}</span>
      </div>
      <div className="ed-mast">
        <a href="#top" className="ed-name" aria-label="Parth Khanna, back to top">Parth Khanna</a>
        <span className="ed-descr">Full-Stack Engineering / Applied AI</span>
        <nav aria-label="Main" className="ed-nav">
          <a href="#work" className="ed-link">Work</a>
          <a href="#about" className="ed-link">About</a>
          <a href="#contact" className="ed-link">Contact</a>
          <a href={site.resume} target="_blank" rel="noreferrer" className="ed-link ed-red">Résumé</a>
        </nav>
      </div>
    </header>
  );
}