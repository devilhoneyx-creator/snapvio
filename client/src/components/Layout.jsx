import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-full flex flex-col relative">
        <Outlet />
      </main>

      <footer className="w-full border-t border-slate-800 bg-[#0f1115] py-8 mt-auto px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-6 text-sm font-medium">
               <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
               <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
               <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
               <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
               <Link to="/disclaimer" className="text-[#10b981] hover:text-[#059669] transition-colors">Disclaimer</Link>
            </div>

            <p className="text-slate-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Snapvio. Designed and developed by <a href="https://www.facebook.com/loveuhoneyminati/" target="_blank" rel="noreferrer" className="text-[#10b981] hover:underline font-semibold font-sans tracking-wide">Subhadeep Hazra</a>.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
