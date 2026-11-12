import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Experience",
  alternates: { canonical: "/experience/" },
};
export default function Experience() {
  return (
    <div className="container page">
      <header className="page-heading">
        <p className="eyebrow">EXPERIENCE</p>
        <h1>
          Research, development
          <br />
          and delivery.
        </h1>
        <p>
          Application work during an R&D internship, supported by a Computer
          Science degree and applied digital IC training.
        </p>
      </header>
      <section className="experience-entry">
        <div>
          <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
          <p>Employer confidential</p>
        </div>
        <div>
          <h2>Research & Development Intern</h2>
          <p className="large-copy">
            Researched, developed and deployed software applications, from
            requirements and content workflows to interfaces, backend services
            and release checks.
          </p>
          <ul className="work-list">
            <li>
              Created React applications for students and administrators,
              including onboarding, assessment workflows and content management.
            </li>
            <li>
              Developed Node.js/Express and Python/Flask services, relational
              data models and third-party integrations.
            </li>
            <li>
              Implemented Docker/Nginx deployment workflows, GitHub Actions
              build gates and Playwright staging checks.
            </li>
            <li>
              Worked on privately deployed assessment and AI-assisted
              applications, with persistent application state and review/export
              workflows.
            </li>
            <li>
              Added service-status visibility to an administration panel to help
              identify external service outages.
            </li>
          </ul>
          <div className="inline-project-links">
            <Link href="/projects/education-platform/">
              Educational platform ↗
            </Link>
            <Link href="/projects/private-assessment/">
              Private assessment application ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="experience-entry">
        <div>
          <span className="eyebrow">APPLIED TRAINING</span>
          <p>May–September 2026</p>
        </div>
        <div>
          <h2>Digital IC Design and Verification</h2>
          <p>
            Upskilling Training Programme (USTP), Micro Electronics Research Lab
            (MERL), UIT University, Karachi.
          </p>
          <p>
            Applied work in RTL, processor/peripheral integration, directed
            tests, SystemVerilog/UVM coursework and ASIC implementation using
            open-source tools. The group capstone combined a dual-core RV32I SoC
            with a shared AXI4-Lite fabric and Sky130 physical implementation.
          </p>
          <Link href="/hardware/" className="text-link">
            Explore hardware projects ↗
          </Link>
        </div>
      </section>
      <div className="page-crosslink">
        <span>A concise overview for your role.</span>
        <Link href="/cv/">View the CVs →</Link>
      </div>
    </div>
  );
}
