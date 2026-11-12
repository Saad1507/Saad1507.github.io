import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
export const metadata: Metadata = {
  title: "Digital Hardware",
  description:
    "RTL integration, directed verification and ASIC physical implementation projects by Muhammad Saad.",
  alternates: { canonical: "/hardware/" },
};
export default function Hardware() {
  return (
    <div className="container page">
      <header className="page-heading">
        <p className="eyebrow">WORK / DIGITAL HARDWARE</p>
        <h1>
          From RTL
          <br />
          to physical implementation.
        </h1>
        <p>
          Processor and peripheral design, directed verification and open-source
          ASIC flows, developed through applied digital IC training at MERL, UIT
          University.
        </p>
        <div className="button-row">
          <a
            className="button button-primary"
            href="/cv/muhammad-saad-hardware.pdf"
            download
          >
            Download hardware CV ↓
          </a>
          <Link className="text-link" href="/asic-journey/">
            Training and tools ↗
          </Link>
        </div>
      </header>
      <div className="hardware-summary">
        <div>
          <span>DESIGN</span>
          <strong>Verilog · RV32I · AXI4-Lite</strong>
        </div>
        <div>
          <span>VERIFICATION</span>
          <strong>Directed tests · SystemVerilog</strong>
        </div>
        <div>
          <span>IMPLEMENTATION</span>
          <strong>LibreLane · OpenROAD · Sky130</strong>
        </div>
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => p.category === "Hardware")
          .map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
      </div>
      <div className="page-crosslink">
        <span>Explore the software side of computer architecture.</span>
        <Link href="/projects/cpp-simulator/">C++ cache simulator →</Link>
      </div>
    </div>
  );
}
