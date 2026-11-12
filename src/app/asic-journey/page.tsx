import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Digital IC Training",
  alternates: { canonical: "/asic-journey/" },
};
export default function Training() {
  return (
    <div className="container page">
      <Link className="breadcrumb" href="/hardware/">
        ← Digital hardware
      </Link>
      <header className="page-heading">
        <p className="eyebrow">APPLIED TRAINING</p>
        <h1>
          Digital IC design
          <br />
          and verification.
        </h1>
        <p>
          Upskilling Training Programme (USTP) in Digital IC Design and
          Verification, at Micro Electronics Research Lab (MERL), UIT
          University, Karachi. May–September 2026.
        </p>
      </header>
      <div className="training-grid">
        <section>
          <span className="eyebrow">01 / DESIGN</span>
          <h2>RTL and integration</h2>
          <p>
            Combinational and sequential logic, finite-state machines, register
            files, RV32I datapaths, memory-mapped I/O and peripheral
            interconnects.
          </p>
          <Link href="/projects/dual-core-soc/" className="text-link">
            Dual-core SoC ↗
          </Link>
        </section>
        <section>
          <span className="eyebrow">02 / VERIFICATION</span>
          <h2>Check the behaviour</h2>
          <p>
            Directed self-checking testbenches, SystemVerilog classes,
            constrained randomization, assertions and UVM coursework for ALU,
            APB and FIFO verification.
          </p>
          <p>
            Standalone ALU coursework recorded 305 generated, checked and
            passing transactions in the submitted Questa result.
          </p>
        </section>
        <section>
          <span className="eyebrow">03 / IMPLEMENTATION</span>
          <h2>RTL to GDSII</h2>
          <p>
            Synthesis, floorplanning, placement, clock-tree synthesis, routing,
            parasitic extraction and physical-check review using LibreLane,
            OpenROAD, Yosys and Sky130.
          </p>
          <Link href="/projects/uart-transceiver/" className="text-link">
            UART implementation ↗
          </Link>
        </section>
        <section>
          <span className="eyebrow">04 / FPGA PREPARATION</span>
          <h2>Wrappers and constraints</h2>
          <p>
            Board-facing control/status wrappers, target configuration and
            archived Yosys/F4PGA synthesis artifacts for FPGA-oriented designs.
          </p>
          <Link href="/projects/cache-controller/" className="text-link">
            Cache controller ↗
          </Link>
        </section>
      </div>
    </div>
  );
}
