import type { Metadata } from "next";
import { cvs } from "@/lib/projects";
export const metadata: Metadata = {
  title: "CVs",
  description:
    "Download Muhammad Saad’s general software, general hardware and combined systems CVs.",
  alternates: { canonical: "/cv/" },
};
export default function CV() {
  return (
    <div className="container page">
      <header className="page-heading">
        <p className="eyebrow">CV</p>
        <h1>Experience in focus.</h1>
        <p>
          Choose the CV relevant to your role. Each is a concise, two-page PDF.
        </p>
      </header>
      <div className="cv-grid">
        {cvs.map((c, i) => (
          <article
            className={"cv-card " + (i === 2 ? "cv-systems" : "")}
            key={c.id}
          >
            <div className="cv-top">
              <span className="eyebrow">{c.label}</span>
              <span className="cv-file-icon" aria-hidden="true">
                PDF
              </span>
            </div>
            <h2>{c.name}</h2>
            <p>{c.description}</p>
            <div className="cv-preview-lines" aria-hidden="true">
              <b />
              <i />
              <i />
              <i />
              <b />
              <i />
              <i />
            </div>
            <span className="file-meta">{c.pages} pages · PDF</span>
            <div className="button-row">
              <a className="button button-primary" href={c.file} download>
                Download ↓
              </a>
              <a
                className="text-link"
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF ↗
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="cv-help">
        <h2>Looking for a particular kind of work?</h2>
        <p>
          The software CV covers application development, backend services and
          applied AI. The hardware CV covers RTL, verification and ASIC
          implementation. The systems version brings software and computer
          architecture together.
        </p>
        <a className="text-link" href="mailto:saadyasir1507@gmail.com">
          Get in touch ↗
        </a>
      </div>
    </div>
  );
}
