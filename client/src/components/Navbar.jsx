import React from 'react';
import { DownloadCloud } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0f1115] border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#10b981] flex items-center justify-center text-white shadow-md">
            <DownloadCloud size={18} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Snapvio</span>
        </a>

        {/* Utilitarian Links */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">How to Download</a>
          <a href="#" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Supported Sites</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
