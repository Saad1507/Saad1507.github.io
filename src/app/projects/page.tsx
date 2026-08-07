import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const core_projects = [
    {
      title: "AMBA APB Master-Slave Interconnect",
      description: "SoC protocol implementation modeling real-world peripheral wait-states, pslverr error flags, and multi-slave decoding across a shared bus.",
      tags: ["Verilog", "SoC Protocols", "APB", "Verification"],
      href: "/projects/amba-apb"
    },
    {
      title: "2-Way Set-Associative Cache Controller",
      description: "Physical cache hierarchy interfacing a single-port SRAM, packing valid, tag, and payload into 37-bit distinct memory words.",
      tags: ["Verilog", "Computer Architecture", "SRAM", "FPGA"],
      href: "/projects/cache-controller"
    },
    {
      title: "UART Transceiver System",
      description: "Full-duplex Universal Asynchronous Receiver-Transmitter with parametrized baud generation and parity error detection, synthesized on Artix-7.",
      tags: ["Verilog", "FSM", "Physical Hardware", "F4PGA"],
      href: "/projects/uart-transceiver"
    },
    {
      title: "C++ Cache Architectural Simulator",
      description: "Memory hierarchy software simulator tracking cache hits, misses, and evictions using bitwise index/offset extraction and wxWidgets GUI components.",
      tags: ["C++", "Bitwise Math", "Systems Programming"],
      href: "/projects/cpp-simulator"
    },
    {
      title: "Hardware VGA Driver",
      description: "Display timing signal synthesizer targeting physical standard monitor frequencies with an SRAM frame-buffer interface.",
      tags: ["Verilog", "Hardware Driver", "Counters"],
      href: "/projects/vga-display"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slateDark tracking-tight">Engineering Projects</h1>
        <div className="w-16 h-1 bg-accentCobalt rounded-full"></div>
      </div>
      
      <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
        Detailed technical breakdowns of my hardware implementations. Each project focuses heavily on testbench integrity, modular architecture, and edge-case validation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {core_projects.map((p) => (
          <ProjectCard key={p.href} {...p} />
        ))}
      </div>
    </div>
  );
}
