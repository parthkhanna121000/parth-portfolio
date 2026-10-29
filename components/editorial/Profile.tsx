import Image from "next/image";
import { exploring, site, skills } from "@/data/site";

export function Profile() {
  return (
    <section id="about" className="ed-wrap ed-sec" aria-labelledby="about-title">
      <div className="ed-sechead ed-label ed-red"><span>03</span><span>Profile</span></div>
      <div className="ed-profile">
        <figure>
          <div className="ed-portrait">
            <Image src="/images/Profile.jpeg" alt="Portrait of Parth Khanna" fill sizes="340px" />
          </div>
          <figcaption className="ed-label ed-cap">Parth Khanna</figcaption>
        </figure>

        <div className="ed-lede">
          <h2 id="about-title" className="ed-display ed-h2">Practical software, from the interface down to the API.</h2>
          <p style={{ marginTop: 28 }}>
            I’m Parth Khanna, a Computer Science Engineering graduate interested in building practical software products.
          </p>
          <p>
            My work spans full-stack web development and AI-powered applications, with a focus on React, Next.js, Node.js,
            databases and modern AI APIs.
          </p>
          <p>
            I’m currently strengthening my fundamentals in software engineering, DSA and AI/ML while continuing to build
            real-world projects.
          </p>
        </div>
      </div>

      <dl className="ed-ledger">
        <div>
          <dt className="ed-label">Jul 2025 – Aug 2025, Remote</dt>
          <dd>
            <h3>Web Development Intern, MotionCut</h3>
            <p className="ed-mut">
              Developed responsive web interfaces using HTML5, CSS3, JavaScript, Flexbox, Grid and media queries.
              Implemented JavaScript-based interactions and responsive layouts for desktop and mobile interfaces.
            </p>
            <p style={{ marginTop: 10 }}>
              <a href={site.certificate} target="_blank" rel="noreferrer" className="ed-link ed-red">View certificate</a>
            </p>
          </dd>
        </div>
        <div>
          <dt className="ed-label">2022 – 2026, Greater Noida, India</dt>
          <dd>
            <h3>IILM University</h3>
            <p className="ed-mut">Bachelor of Technology, Computer Science Engineering. CGPA 8.05 / 10.</p>
          </dd>
        </div>
        <div>
          <dt className="ed-label">Currently exploring</dt>
          <dd>
            <p>{exploring.join(", ")}.</p>
            <p className="ed-mut" style={{ fontSize: "0.9rem" }}>Areas of current learning, not claims of professional expertise.</p>
          </dd>
        </div>
        {Object.entries(skills).map(([k, v]) => (
          <div key={k}>
            <dt className="ed-label">{k}</dt>
            <dd><p>{v.join(", ")}</p></dd>
          </div>
        ))}
      </dl>
    </section>
  );
}