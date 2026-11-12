import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, findProject } from "@/lib/projects";
import ProjectVisual from "@/components/ProjectVisual";
import ProjectCard from "@/components/ProjectCard";
import CacheDemo from "@/components/CacheDemo";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = findProject(params.slug);
  return {
    title: p?.name ?? "Project",
    description: p?.summary,
    alternates: { canonical: "/projects/" + params.slug + "/" },
  };
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = findProject(params.slug);
  if (!p) notFound();
  const related = projects
    .filter((x) => x.category === p.category && x.slug !== p.slug)
    .slice(0, 2);
  return (
    <article className="container page project-page">
      <Link
        className="breadcrumb"
        href={p.category === "Hardware" ? "/hardware/" : "/software/"}
      >
        ← {p.category === "Hardware" ? "Digital hardware" : "Software"}
      </Link>
      <header className="project-heading">
        <p className="eyebrow">{p.kind}</p>
        <h1>{p.name}</h1>
        <p>{p.summary}</p>
        <ul className="tag-list">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {p.repo && (
          <a
            className="button button-secondary"
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            View repository ↗
          </a>
        )}
      </header>
      <ProjectVisual type={p.visual} large />
      <p className="illustration-caption">
        Conceptual illustration of the project area.
      </p>
      <div className="case-body">
        <aside>
          <span className="eyebrow">MY CONTRIBUTION</span>
          <p>{p.role}</p>
          <dl>
            {p.evidence.map((e) => (
              <div key={e.label}>
                <dt>{e.value}</dt>
                <dd>{e.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
        <div>
          <section>
            <h2>Overview</h2>
            <p>{p.overview}</p>
          </section>
          <section>
            <h2>{p.slug === "picorv32-asic" ? "Implementation" : "What I built"}</h2>
            <ul className="work-list">
              {p.work.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </section>
          {p.note && <p className="project-note">{p.note}</p>}
        </div>
      </div>
      {p.slug === "cpp-simulator" && (
        <>
          <CacheDemo />
          <div className="page-crosslink">
            <span>Software and computer architecture, in one CV.</span>
            <a href="/cv/muhammad-saad-systems.pdf">View systems CV ↗</a>
          </div>
        </>
      )}
      <section className="related-projects">
        <div className="section-heading">
          <h2>More {p.category.toLowerCase()} work</h2>
          <Link className="text-link" href="/projects/">
            All projects ↗
          </Link>
        </div>
        <div className="project-grid">
          {related.map((r) => (
            <ProjectCard key={r.slug} project={r} />
          ))}
        </div>
      </section>
    </article>
  );
}
