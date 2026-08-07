import SkillCard from '@/components/SkillCard';

export default function Skills() {
  const hardware = ["Verilog HDL", "RTL Design", "FSM Design", "Combinational Logic", "Sequential Logic", "Adders/ALUs"];
  const verification = ["Functional Verification", "Testbench Development", "Randomized Stimulus", "Waveform Debugging"];
  const protocols = ["AMBA APB", "UART Transceiver", "VGA Control"];
  const asicFlow = ["Yosys Synthesis", "Place-and-Route Logs", "Timing Constraints (.xdc)", "Netlist Review"];
  const software = ["C++ (OOP, STL, Pointers)", "Python Scripting", "GitHub Actions / CI", "wxWidgets"];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slateDark tracking-tight">Technical Skills</h1>
        <div className="w-16 h-1 bg-accentCobalt rounded-full"></div>
      </div>
      
      <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
        My technical stack bridges the gap between low-level hardware description and high-level software automation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <SkillCard category="Hardware Description & RTL" skills={hardware} />
        <SkillCard category="Functional Verification" skills={verification} />
        <SkillCard category="SoC Protocols & Peripherals" skills={protocols} />
        <SkillCard category="ASIC / FPGA Flow" skills={asicFlow} />
        <SkillCard category="Software Engineering" skills={software} />
      </div>
    </div>
  );
}
