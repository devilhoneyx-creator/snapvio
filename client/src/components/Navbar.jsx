import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex flex-row md:flex-col lg:flex-row items-start lg:items-center justify-between relative z-10 w-full mb-12 lg:mb-0 gap-6 lg:gap-0">
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform duration-300">
           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <span className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">Snapvio</span>
      </div>
      
      <button className="px-6 py-2.5 rounded-full border border-slate-700/50 bg-slate-800/50 hover:bg-white hover:text-black hover:border-white text-sm font-semibold text-slate-300 transition-all focus:ring-4 focus:ring-white/20 flex items-center gap-2">
        <Sparkles size={16} />
        Admin Dashboard
      </button>
    </div>
  );
}

export default Navbar;
