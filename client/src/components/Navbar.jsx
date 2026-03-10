import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#000000]/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded flex items-center justify-center border border-white/20 bg-white/5 shadow-inner">
            <div className="w-2 h-2 bg-white rounded-sm drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
          <span className="text-white font-semibold tracking-tight text-sm">Snapvio</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Integrations', 'Changelog', 'Pricing', 'API'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a href="#login" className="text-xs font-medium text-gray-400 hover:text-white transition-colors hidden sm:block duration-200">Log in</a>
          <button className="h-7 px-4 bg-white text-black text-xs font-semibold rounded-md hover:bg-gray-200 transition-colors duration-200 tracking-tight">
            Admin
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
