import type { Metadata } from "next";
import ProjectExplorer from "@/components/ProjectExplorer";
export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/projects/" },
};
export default function Projects() {
  return (
    <div className="container page">
      <header className="page-heading compact">
        <p className="eyebrow">WORK</p>
        <h1>Projects in practice.</h1>
        <p>
          Explore by area, or search for a technology. Each project describes
          the work I contributed and the tools involved.
        </p>
      </header>
      <ProjectExplorer />
    </div>
  );
}
