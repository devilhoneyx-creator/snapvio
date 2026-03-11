import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-b-4 border-black bg-white p-4 flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-0 z-50 shadow-[0_8px_0_rgba(0,0,0,1)]">
      
      <div className="text-4xl font-black uppercase tracking-tighter bg-black text-white px-4 py-1 -skew-x-12">
        SNAPVIO.
      </div>
      
      <div className="flex gap-2 sm:gap-6 flex-wrap justify-center">
        <a href="#" className="font-black text-xl uppercase hover:bg-[#ffff00] px-2 border-2 border-transparent hover:border-black transition-colors">Engine</a>
        <a href="#" className="font-black text-xl uppercase hover:bg-[#00ffcc] px-2 border-2 border-transparent hover:border-black transition-colors">API</a>
        <a href="#" className="font-black text-xl uppercase hover:bg-[#ff00ff] hover:text-white px-2 border-2 border-transparent hover:border-black transition-colors">Docs</a>
      </div>
      
      {/* Intentionally removed Login/Admin as requested. Just raw links. */}
      
    </nav>
  );
};

export default Navbar;
