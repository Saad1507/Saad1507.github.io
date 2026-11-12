import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
export const metadata: Metadata = {
  title: "Software",
  description:
    "React applications, Python data pipelines, mobile interfaces and systems programming by Muhammad Saad.",
  alternates: { canonical: "/software/" },
};
export default function Software() {
  return (
    <div className="container page">
      <header className="page-heading">
        <p className="eyebrow">WORK / SOFTWARE</p>
        <h1>
          Applications, APIs
          <br />
          and the systems behind them.
        </h1>
        <p>
          Work across web interfaces, backend services, data collection and
          deployment. Internship applications sit alongside public and academic
          projects, with my contribution explained in each.
        </p>
        <div className="button-row">
          <a
            className="button button-primary"
            href="/cv/muhammad-saad-software.pdf"
            download
          >
            Download software CV ↓
          </a>
          <a
            className="text-link"
            href="https://github.com/Saad1507"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </header>
      <div className="project-grid">
        {projects
          .filter((p) => p.category === "Software")
          .map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
      </div>
      <div className="page-crosslink">
        <span>Looking for RTL and ASIC work?</span>
        <Link href="/hardware/">Explore digital hardware →</Link>
      </div>
    </div>
  );
}
