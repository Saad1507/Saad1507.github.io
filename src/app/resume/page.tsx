import { Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slateDark tracking-tight">Resume</h1>
        <div className="w-16 h-1 bg-accentCobalt rounded-full"></div>
      </div>

      <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
        My engineering resume is available below. It documents my RTL design projects, FPGA implementation experience, and computer architecture background. All projects mentioned are available as open-source repositories on GitHub.
      </p>

      <div className="flex flex-wrap gap-4">
        <a href="/Resume.pdf" download
          className="px-6 py-3 rounded-full bg-slateDark text-white font-medium hover:bg-navyDark transition-all flex items-center space-x-2 shadow-md">
          <Download size={18}/>
          <span>Download Resume (PDF)</span>
        </a>
        <a href="https://github.com/Saad1507/resume" target="_blank" rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-white border border-gray-200 text-slate-700 font-medium hover:border-gray-400 transition-all flex items-center space-x-2">
          <ExternalLink size={16}/>
          <span>Resume Repository</span>
        </a>
      </div>

      <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-100 text-sm text-slate-500 font-medium">Resume.pdf</div>
        <iframe
          src="/Resume.pdf"
          className="w-full"
          style={{ height: '80vh', border: 'none' }}
          title="Muhammad Saad resume"
        />
      </div>
    </div>
  );
}
