import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-20 md:h-24 px-6 md:px-10 flex items-center justify-between border-b border-white/[0.05] relative z-20 shrink-0">
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl glass-button flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
           <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
           <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <span className="text-lg font-medium text-white tracking-tight">Snapvio</span>
      </div>

      <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-black/20 border border-white/5 backdrop-blur-2xl">
        {['Download', 'History', 'Settings'].map((item, idx) => (
          <button 
            key={item} 
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              idx === 0 
                ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]' 
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <button className="h-10 px-5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        Dashboard
      </button>

    </div>
  );
};

export default Navbar;
