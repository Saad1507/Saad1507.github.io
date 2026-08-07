import { CheckCircle2, Clock } from 'lucide-react';

export default function AsicJourney() {
  const completed = [
    "C++ Memory and Systems Basics",
    "Digital Logic Foundations",
    "Verilog HDL Syntax & Paradigms",
    "Fully Parametrizable FSM Design",
    "UART Controller Implementation",
    "SRAM Interface Design",
    "Set-Associative Cache Controllers",
    "AMBA APB Protocol Implementation",
    "Open-Source FPGA Synthesis (F4PGA)",
  ];

  const learning = [
    "ASIC Physical Design Flow",
    "Clock Tree Synthesis (CTS)",
    "IO / Pin Placement",
    "SystemVerilog Assertions (SVA)",
    "UVM Basics",
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slateDark tracking-tight">ASIC Journey</h1>
        <div className="w-16 h-1 bg-accentCobalt rounded-full"></div>
      </div>
      
      <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
        To transition from a pure software background into ASIC Design requires a strict, continuous curriculum. This page tracks exactly what I have already proven through implementation, and what architectural concepts I am actively mastering next.
      </p>

      <div className="grid gap-12 md:grid-cols-2 mt-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle2 className="text-emerald-500" size={24} />
            <h2 className="text-2xl font-bold text-slateDark">Proven / Completed</h2>
          </div>
          <ul className="space-y-4">
            {completed.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-emerald-500 mr-3 mt-1 font-bold">✓</span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-grayLight p-8 rounded-2xl shadow-inner border border-gray-200 flex flex-col h-full">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="text-accentCobalt" size={24} />
            <h2 className="text-2xl font-bold text-slateDark">Currently Learning</h2>
          </div>
          <ul className="space-y-4">
            {learning.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCobalt mt-2 mr-3 border border-blue-400"></div>
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
