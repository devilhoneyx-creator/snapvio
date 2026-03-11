import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 py-4 px-6">
      <div 
        className={`max-w-5xl mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200/50 rounded-full px-6 py-3' 
            : 'bg-transparent border-transparent px-2 py-2'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <span className="text-slate-900 font-extrabold tracking-tight text-xl">Snapvio</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Integrations', 'Pricing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors duration-200">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#login" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors hidden sm:block duration-200">Log in</a>
          <button className="h-10 px-6 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors duration-200 shadow-md">
            Go to Admin
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
