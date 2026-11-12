import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SystemSketch from "@/components/SystemSketch";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/lib/projects";
export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-square" />
            SOFTWARE ENGINEER · KARACHI, PAKISTAN
          </p>
          <h1>
            Web applications,
            <br />
            built <span>end to end.</span>
          </h1>
          <p className="hero-intro">
            I’m Muhammad Saad. I build interfaces, backend services and the
            workflows that bring them into use.
          </p>
          <p className="hero-detail">
            My work combines an R&D internship in application development with
            projects in Python, C++ and digital hardware.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/software/">
              Explore software <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-secondary" href="/cv/">
              View CVs
            </Link>
          </div>
          <Link className="quiet-link" href="/hardware/">
            Explore digital hardware <span aria-hidden="true">→</span>
          </Link>
        </div>
        <SystemSketch />
      </section>
      <div className="capability-band">
        <div className="container">
          <span>INTERFACES</span>
          <b>React & Flutter</b>
          <span>APPLICATIONS</span>
          <b>Node.js & Python</b>
          <span>DELIVERY</span>
          <b>APIs, data & deployment</b>
        </div>
      </div>
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SOFTWARE / PROJECTS</p>
            <h2>From requirements to working applications.</h2>
          </div>
          <Link className="text-link" href="/software/">
            All software work <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="project-grid home-project-grid">
          {projects
            .filter((p) => p.category === "Software" && p.featured)
            .map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
      </section>
      <section className="experience-band">
        <div className="container experience-preview">
          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <h2>
              Research.
              <br />
              Implementation.
              <br />
              Release.
            </h2>
          </div>
          <div>
            <p className="role-label">Research & Development Intern</p>
            <p className="large-copy">
              I researched, developed and deployed web applications during an
              R&D internship, working across student and administrator
              interfaces, backend services and release workflows.
            </p>
            <div className="experience-topics">
              <span>Application research</span>
              <span>React + REST APIs</span>
              <span>Deployment + CI/CD</span>
            </div>
            <Link className="text-link" href="/experience/">
              Read about my experience ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="container section hardware-feature">
        <ProjectVisual type="chip" large />
        <div>
          <p className="eyebrow">DIGITAL HARDWARE</p>
          <h2>
            A closer look at
            <br />
            the system underneath.
          </h2>
          <p>
            Applied training at MERL, UIT University, took my computer
            architecture work into RTL design, directed verification and ASIC
            physical implementation.
          </p>
          <p>
            Explore the dual-core RV32I SoC, UART transceiver and processor
            projects, with contributions and archived results described
            individually.
          </p>
          <Link className="button button-secondary" href="/hardware/">
            Explore digital hardware ↗
          </Link>
        </div>
      </section>
      <section className="container systems-strip">
        <div>
          <p className="eyebrow">SYSTEMS PROGRAMMING</p>
          <h2>C++ meets computer architecture.</h2>
          <p>
            A configurable cache simulator with replacement policies, access
            traces and a desktop interface.
          </p>
        </div>
        <Link className="text-link" href="/projects/cpp-simulator/">
          Explore the simulator ↗
        </Link>
      </section>
    </>
  );
}
