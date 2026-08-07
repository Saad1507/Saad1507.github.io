
export default function UartProject() {
  return (
    <article className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {["Verilog", "FSM", "FPGA", "F4PGA", "Functional Verification"].map(t => (
            <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">{t}</span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slateDark tracking-tight">UART Transceiver System</h1>
        <div className="w-16 h-1 bg-accentCobalt rounded-full"></div>
        <a href="https://github.com/Saad1507/uart-transceiver-verilog" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-sm text-accentCobalt hover:underline pt-2">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg><span>github.com/Saad1507/uart-transceiver-verilog</span>
        </a>
      </div>

      <section className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>A complete, full-duplex UART communication system implemented in synthesizable Verilog, targeting the Digilent Arty A7-100T (Xilinx Artix-7). The design consists of an independent FSM-based transmitter and receiver, a parameterized baud rate generator, and physical I/O interfacing logic deployed through the open-source F4PGA/SymbiFlow flow.</p>
      </section>

      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slateDark">Architecture</h2>
        <p className="text-slate-600 text-sm leading-relaxed">The top-level <code>uart_top</code> module wires together three major sub-modules:</p>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li><strong>uart_baud_gen</strong> — Derives a UART tick from the system clock using a configurable divisor, achieving target baud rates from 9600 to 115200.</li>
          <li><strong>uart_tx</strong> — A Moore FSM cycling through IDLE → START → DATA → PARITY → STOP states on each baud tick.</li>
          <li><strong>uart_rx</strong> — A corresponding receiver FSM with a 3-stage synchronizer for metastability resolution and mid-bit sampling for reliable data recovery.</li>
        </ul>
        <div className="bg-grayLight rounded-xl p-4 text-xs font-mono text-slate-700 overflow-x-auto whitespace-pre">
          {`uart_top
├── uart_baud_gen   (divider → tick)
├── uart_tx         (IDLE→START→DATA[0:7]→PARITY→STOP)
└── uart_rx         (sync→START→DATA[0:7]→PARITY→STOP→DONE)`}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slateDark">Design Decisions</h2>
        <ul className="space-y-3 text-slate-600 text-sm">
          <li><strong>Parametrized Baud Divisor:</strong> The single <code>BAUD_DIV</code> parameter drives the tick generator, making the design technology-agnostic for different clock rates.</li>
          <li><strong>3-Stage Synchronizer:</strong> Eliminates metastability on the async RX input before feeding the receiver FSM.</li>
          <li><strong>Latched LED Flags:</strong> Busy, TX done, RX done, and error flags are latched for one full UART frame so on-board LEDs are human-readable without a logic analyzer.</li>
          <li><strong>Configurable Parity:</strong> Even, odd, or no-parity mode selectable at synthesis time.</li>
        </ul>
      </section>

      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slateDark">Verification</h2>
        <p className="text-slate-600 text-sm">Directed testbench exercises loopback (TX wired to RX), single-byte transfers at each supported baud rate, parity error injection, framing error injection, back-to-back byte streaming, and held-low line glitches.</p>
        <p className="text-slate-600 text-sm">All testcases are self-checking: expected and received bytes are compared with an automated pass/fail assertion written directly in Verilog.</p>
      </section>

      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-2">
        <h2 className="text-xl font-bold text-slateDark">FPGA Implementation</h2>
        <p className="text-slate-600 text-sm">Synthesized via the open-source F4PGA/SymbiFlow toolchain targeting the Arty A7-100T. Constraints are defined in an XDC file mapping UART pins to the board&apos;s PMOD headers, and status flags to LD0&ndash;LD3.</p>
      </section>
    </article>
  );
}
