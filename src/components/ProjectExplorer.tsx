"use client";
import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
export default function ProjectExplorer() {
  const [category, setCategory] = useState("Software");
  const [query, setQuery] = useState("");
  const filtered = projects.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (p.name + " " + p.summary + " " + p.stack.join(" "))
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <>
      <div className="explorer-controls">
        <div
          className="filter-group"
          role="group"
          aria-label="Project category"
        >
          {["Software", "Hardware", "All"].map((c) => (
            <button
              key={c}
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="search-field">
          <span className="sr-only">Search projects or technologies</span>
          <input
            type="search"
            placeholder="Search projects or technologies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span aria-hidden="true">⌕</span>
        </label>
      </div>
      <p className="result-count" role="status">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>
      <div className="project-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <h2>No matching projects</h2>
          <p>Try another technology or view all projects.</p>
          <button
            className="button button-secondary"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
