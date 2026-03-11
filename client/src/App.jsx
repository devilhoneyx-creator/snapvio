import React from 'react';
import Navbar from './components/Navbar';
import Downloader from './components/Downloader';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans bg-slate-50 text-slate-900 w-full overflow-hidden">
      
      {/* Left Panel - Fixed Brand & Copy (Dark Mode) */}
      <div className="lg:w-5/12 lg:fixed lg:h-screen bg-slate-950 text-white flex flex-col p-8 lg:p-14 relative overflow-hidden shadow-2xl z-20">
        
        {/* Abstract background blur in left panel */}
        <div className="absolute top-0 right-0 -mr-[30%] -mt-[30%] text-white/[0.03] pointer-events-none z-0 mix-blend-screen opacity-60">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[800px] h-[800px] blur-3xl">
            <path fill="#3b82f6" d="M45.7,-76.4C58.9,-69.3,69,-55.4,76.5,-40.8C84,-26.2,88.9,-11,87.6,3.6C86.3,18.1,78.8,32,69.5,44.2C60.2,56.4,49.1,66.8,35.6,73.4C22.1,80,6.2,82.8,-8.7,81.1C-23.6,79.4,-37.5,73.1,-50.2,64C-62.9,54.9,-74.4,43,-81.4,28.6C-88.4,14.3,-90.9,-2.4,-86.3,-17.1C-81.8,-31.8,-70.2,-44.6,-57.1,-52.5C-44,-60.4,-29.4,-63.5,-14.7,-64.5C0,-65.5,15,-64.4,30.3,-60.4C45.6,-56.4,61,-49.5,45.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        {/* Global Component for Left Panel Header */}
        <Navbar />

        <div className="flex-1 flex flex-col justify-center relative z-10 mt-16 lg:mt-0">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl lg:text-7xl xl:text-[5rem] font-bold tracking-tighter mb-8 leading-[1.05]"
          >
            Extract<br/>Media<br/><span className="text-blue-500">Instantly.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-light max-w-md leading-relaxed"
          >
            A powerful, platform-agnostic tool to securely download high-fidelity video and audio streams from the modern web.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center gap-6 mt-16"
          >
            <div className="flex -space-x-4">
              {['FB', 'IG', 'TT', 'YT', 'X'].map((plat, i) => (
                <div key={i} className={`w-12 h-12 rounded-full border-4 border-slate-950 flex items-center justify-center bg-slate-800 text-[10px] font-black tracking-widest text-slate-400 shadow-xl`}>
                   {plat}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">Supports 40+ Networks</p>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/50 text-xs text-slate-500 font-medium relative z-10 flex justify-between items-center">
          <span>© {new Date().getFullYear()} Snapvio Core System V4</span>
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
        </div>
      </div>

      {/* Right Panel - Interactive App (Light Mode, Scrollable) */}
      <div className="lg:w-7/12 lg:ml-[41.666667%] min-h-screen bg-slate-50 flex flex-col relative z-10 w-full">
        <Downloader />
      </div>

    </div>
  );
}

export default App;
