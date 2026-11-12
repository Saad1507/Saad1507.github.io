import Link from "next/link";
import type { Project } from "@/lib/projects";
import ProjectVisual from "./ProjectVisual";
export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        href={"/projects/" + p.slug + "/"}
        className="visual-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProjectVisual type={p.visual} />
      </Link>
      <div className="project-card-body">
        <p className="eyebrow">{p.kind}</p>
        <h3>
          <Link href={"/projects/" + p.slug + "/"}>
            {p.name}
            <span aria-hidden="true">↗</span>
          </Link>
        </h3>
        <p>{p.summary}</p>
        <ul className="tag-list" aria-label="Technologies">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
