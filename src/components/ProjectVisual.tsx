import type { Project } from "@/lib/projects";
export default function ProjectVisual({
  type,
  large = false,
}: {
  type: Project["visual"];
  large?: boolean;
}) {
  return (
    <div
      className={
        "project-visual visual-" + type + (large ? " visual-large" : "")
      }
      aria-hidden="true"
    >
      <div className="visual-grid" />
      {type === "web" ? (
        <div className="browser-sketch">
          <div className="window-bar">
            <i />
            <i />
            <i />
            <span>Application / interface</span>
          </div>
          <div className="sketch-layout">
            <div className="sketch-sidebar">
              <b />
              <b />
              <b />
              <b />
            </div>
            <div className="sketch-content">
              <div className="sketch-heading" />
              <div className="sketch-line" />
              <div className="sketch-modules">
                <i />
                <i />
                <i />
              </div>
              <div className="sketch-row" />
              <div className="sketch-row" />
              <div className="sketch-button" />
            </div>
          </div>
          <div className="visual-caption">
            REACT <span>↔</span> API <span>↔</span> POSTGRESQL
          </div>
        </div>
      ) : type === "mobile" ? (
        <div className="phones">
          <div className="phone">
            <i className="notch" />
            <span className="phone-label">INTERFACE</span>
            <div className="phone-avatar" />
            <b />
            <i />
            <i />
            <div className="phone-action" />
          </div>
          <div className="phone phone-secondary">
            <i className="notch" />
            <span className="phone-label">APPLICATION</span>
            <div className="phone-row" />
            <div className="phone-row" />
            <div className="phone-row" />
            <div className="phone-action" />
          </div>
        </div>
      ) : type === "chip" ? (
        <div className="chip-diagram">
          <div className="chip-core">
            <span>RV32I</span>
            <small>DATAPATH + CONTROL</small>
          </div>
          <div className="chip-bus">INTERCONNECT</div>
          <div className="chip-peripherals">
            <span>SRAM</span>
            <span>I/O</span>
            <span>UART</span>
          </div>
        </div>
      ) : type === "cache" ? (
        <div className="cache-diagram">
          <span className="diagram-label">MEMORY ADDRESS</span>
          <div className="address-bits">
            <b>TAG</b>
            <b>INDEX</b>
            <b>OFFSET</b>
          </div>
          <div className="memory-table">
            <div>
              <span>VALID</span>
              <span>TAG</span>
              <span>DATA</span>
            </div>
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <i />
                <i />
                <i />
              </div>
            ))}
          </div>
          <span className="cache-status">LOOKUP → HIT / MISS</span>
        </div>
      ) : type === "retrieval" ? (
        <div className="retrieval-diagram">
          <div className="query-line">CLAIM</div>
          <div className="flow-stem" />
          <div className="evidence-papers">
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <span>EVIDENCE 0{i + 1}</span>
                <i />
                <i />
                <i />
              </div>
            ))}
          </div>
          <div className="flow-stem" />
          <div className="query-line query-result">
            RETRIEVE · RANK · CLASSIFY
          </div>
        </div>
      ) : type === "wave" ? (
        <div className="wave-diagram">
          <span className="diagram-label">SIGNAL / TIME</span>
          {["clk", "valid", "ready", "data"].map((s, i) => (
            <div className="wave-row" key={s}>
              <span>{s}</span>
              <svg viewBox="0 0 240 30">
                <path
                  className="signal-trace"
                  pathLength="1"
                  d={
                    i === 0
                      ? "M0 25H20V5H40V25H60V5H80V25H100V5H120V25H140V5H160V25H180V5H200V25H220V5H240"
                      : i === 3
                        ? "M0 15H30L40 5H160L170 15H240"
                        : "M0 25H60V5H160V25H240"
                  }
                />
                <path
                  className="signal-packet"
                  pathLength="1"
                  d={
                    i === 0
                      ? "M0 25H20V5H40V25H60V5H80V25H100V5H120V25H140V5H160V25H180V5H200V25H220V5H240"
                      : i === 3
                        ? "M0 15H30L40 5H160L170 15H240"
                        : "M0 25H60V5H160V25H240"
                  }
                />
                <line className="signal-cursor" x1="0" x2="0" y1="0" y2="30" />
              </svg>
            </div>
          ))}
        </div>
      ) : type === "process" ? (
        <div className="pipeline-diagram">
          <div className="source-nodes">
            <span>PROCESS A</span>
            <span>QUEUE</span>
            <span>PROCESS B</span>
          </div>
          <div className="pipeline-join" />
          <div className="pipeline-node">THREADS + TASKS</div>
          <div className="flow-stem" />
          <div className="pipeline-store">DESKTOP INTERFACE</div>
        </div>
      ) : (
        <div className="pipeline-diagram">
          <div className="source-nodes">
            <span>SOURCE 01</span>
            <span>SOURCE 02</span>
            <span>SOURCE 03</span>
          </div>
          <div className="pipeline-join" />
          <div className="pipeline-node">
            COLLECT <span>→</span> PARSE <span>→</span> VALIDATE
          </div>
          <div className="flow-stem" />
          <div className="pipeline-store">API + DATABASE</div>
        </div>
      )}
    </div>
  );
}
