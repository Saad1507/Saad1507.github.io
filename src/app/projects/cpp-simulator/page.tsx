
export default function CppSimulator() {
  return (
    <article className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {["C++", "wxWidgets", "Computer Architecture", "Bitwise Math"].map(t => (
            <span key={t} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">{t}</span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slateDark tracking-tight">C++ Cache Architectural Simulator</h1>
        <div className="w-16 h-1 bg-accentCobalt rounded-full"></div>
        <a href="https://github.com/Saad1507/cpp-for-digital-systems" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-sm text-accentCobalt hover:underline pt-2">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg><span>github.com/Saad1507/cpp-for-digital-systems</span>
        </a>
      </div>

      <section className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>An interactive software simulator for cache memory hierarchies, written in C++ with a wxWidgets GUI. The simulator accepts CPU load/store trace files and executes them against configurable cache parameters, tracking hit, miss, and eviction statistics with step-by-step visual feedback.</p>
      </section>

      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slateDark">Address Decomposition</h2>
        <p className="text-slate-600 text-sm">The core of the simulator implements bitwise address decomposition identical to what the hardware cache controller performs in silicon:</p>
        <div className="bg-grayLight rounded-xl p-4 text-xs font-mono text-slate-700 overflow-x-auto whitespace-pre">
{`offset_bits = log2(block_size)
index_bits  = log2(num_sets)

offset = address & ((1 << offset_bits) - 1)
index  = (address >> offset_bits) & ((1 << index_bits) - 1)
tag    = address >> (offset_bits + index_bits)`}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slateDark">Supported Configurations</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
          <div><strong>Mapping Policy:</strong><br/>Direct-Mapped, N-Way Set-Associative, Fully Associative</div>
          <div><strong>Replacement Policy:</strong><br/>LRU, FIFO, Random</div>
          <div><strong>Block Size:</strong><br/>Configurable at runtime</div>
          <div><strong>Cache Size:</strong><br/>Configurable at runtime</div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-slateDark mb-3">Relationship to Hardware Implementation</h2>
        <p className="text-slate-600 text-sm">This simulator was developed alongside the Verilog cache controller as a cross-validation tool. The same tag/index/offset decomposition logic, LRU policy, and hit/miss statistics generated in C++ were used to verify expected behavior in the hardware testbench.</p>
      </section>
    </article>
  );
}
