import React from 'react';
import { DownloadCloud, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:bg-blue-500 transition-colors">
            <DownloadCloud size={18} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Snapvio</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Supported Sites</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">FAQ</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Terms of Service</a>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4">
           {/* Removing admin/login as requested previously, keeping UI clean */}
           <a 
             href="https://github.com" 
             target="_blank" 
             rel="noreferrer"
             className="text-zinc-400 hover:text-white transition-colors p-2"
             aria-label="GitHub"
           >
             <Github size={20} />
           </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
