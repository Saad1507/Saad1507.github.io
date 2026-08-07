import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slateDark tracking-tight">About Me</h1>
        <div className="w-16 h-1 bg-accentCobalt rounded-full"></div>
      </div>
      
      <div className="prose prose-slate max-w-none text-lg text-slate-700 leading-relaxed space-y-6">
        <p>
          I am a Computer Science engineer who transitioned into semiconductor architecture because of a deep fascination with how software execution is physically determined by digital logic.
        </p>
        <p>
          Throughout my computer science education, I focused heavily on C++ systems programming, learning how the compiler interfaces with the memory hierarchy. This natural curiosity led me to Verilog and Hardware Description Languages, where I began mathematically designing the modules (Cache Controllers, UART Transceivers) that software developers typically take for granted.
        </p>
        <p>
          My engineering philosophy is rooted in the <strong>ASIC Design Flow</strong> and rigorous functional verification. I don&apos;t just write behavioral Verilog that simulates correctly; I heavily utilize the open-source toolchain (Yosys, F4PGA, SymbiFlow) to understand how my logic synthesizes, maps onto physical Artix-7 LUTs, and resolves timing constraints.
        </p>
      </div>

      <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-slateDark mb-6 flex items-center">
          Career Timeline
        </h2>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {[
            { phase: "Computer Science Foundation", desc: "Data Structures, Systems Programming (C++)" },
            { phase: "Digital Logic Design", desc: "Boolean Math, Adders, ALUs, Logisim Pipelines" },
            { phase: "RTL Design", desc: "Verilog HDL, FSMs, Synthesizable Architecture" },
            { phase: "Subsystem Implementation", desc: "UART Transceiver, Cache Controller, SRAM Interfaces" },
            { phase: "System-on-Chip Interconnects", desc: "AMBA APB Protocol, Wait-State Logic" },
            { phase: "Physical Implementation", desc: "Artix-7 FPGA Targeting via F4PGA / Yosys Synthesis" }
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-accentCobalt text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mt-1">
                <CheckCircle2 size={16} className="text-white" />
              </div>
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded bg-gray-50 border border-gray-100 group-hover:border-blue-100 shadow-sm group-hover:shadow transition-all space-y-1">
                <h3 className="font-bold text-slateDark text-sm">{item.phase}</h3>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
