import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-dark/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Snapvio
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all">Home</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all">Supported Platforms</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all">Blog</a>
              <a href="#" className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/20">Admin</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
