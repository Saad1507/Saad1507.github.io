"use client";
import { useState } from "react";
const trace = [1, 2, 3, 1, 4, 2, 4, 1];
export default function CacheDemo() {
  const [step, setStep] = useState(0);
  let cache: number[] = [];
  let hits = 0;
  let result = "Ready";
  for (let i = 0; i < step; i++) {
    const block = trace[i];
    if (cache.includes(block)) {
      hits++;
      result = "Hit";
      cache = cache.filter((x) => x !== block);
    } else {
      result = "Miss";
      if (cache.length === 3) cache.shift();
    }
    cache.push(block);
  }
  return (
    <section className="cache-demo">
      <div>
        <p className="eyebrow">Try the concept</p>
        <h2>A small LRU cache</h2>
        <p>
          Step through a fixed sequence of block accesses. This browser example
          illustrates replacement; the full project is written in C++ with
          wxWidgets.
        </p>
      </div>
      <div className="cache-example">
        <div className="trace" aria-label="Access sequence">
          {trace.map((x, i) => (
            <span
              key={i}
              className={i === step - 1 ? "current" : i < step ? "visited" : ""}
            >
              {x}
            </span>
          ))}
        </div>
        <div
          className="cache-slots"
          aria-label="Cache blocks from least to most recently used"
        >
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <small>SLOT {i + 1}</small>
              <strong>{cache[i] ?? "—"}</strong>
            </div>
          ))}
        </div>
        <p className="demo-status" role="status">
          {step === 0
            ? "Three empty slots. Start with block 1."
            : "Access " +
              step +
              ": block " +
              trace[step - 1] +
              " → " +
              result +
              ". " +
              hits +
              " hits, " +
              (step - hits) +
              " misses."}
        </p>
        <div className="button-row">
          <button
            className="button button-primary"
            disabled={step === trace.length}
            onClick={() => setStep((s) => s + 1)}
          >
            {step === trace.length ? "Sequence complete" : "Next access →"}
          </button>
          <button
            className="button button-secondary"
            onClick={() => setStep(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
