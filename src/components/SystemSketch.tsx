"use client";
import { useState } from "react";
const layers = [
  {
    name: "Interface",
    tech: "React · Flutter",
    text: "Clear screens, reusable components and connected user journeys.",
  },
  {
    name: "Application",
    tech: "Node.js · Python",
    text: "APIs, integrations and application logic that support the interface.",
  },
  {
    name: "Data & delivery",
    tech: "PostgreSQL · Docker · CI/CD",
    text: "Persistent data, deployment workflows and checks before release.",
  },
];
export default function SystemSketch() {
  const [active, setActive] = useState(0);
  return (
    <div className="system-sketch">
      <div className="sketch-topline">
        <span className="status-dot" />
        HOW THE PIECES CONNECT<span>01—03</span>
      </div>
      <div
        className="system-layers"
        role="group"
        aria-label="Explore application layers"
      >
        {layers.map((l, i) => (
          <button
            key={l.name}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={active === i ? "layer active" : "layer"}
          >
            <span className="layer-index">0{i + 1}</span>
            <span>
              <strong>{l.name}</strong>
              <small>{l.tech}</small>
            </span>
            <span className="layer-arrow" aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
      </div>
      <div className="layer-description" aria-live="polite">
        <span className="mini-label">MY WORK ACROSS THE STACK</span>
        <p key={active} className="layer-copy">
          {layers[active].text}
        </p>
      </div>
      <div className="sketch-bottomline">
        <span>BUILD</span>
        <i />
        <span>TEST</span>
        <i />
        <span>DEPLOY</span>
      </div>
    </div>
  );
}
