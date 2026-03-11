import React from 'react';
import Navbar from './components/Navbar';
import Downloader from './components/Downloader';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 font-sans selection:bg-white/20 relative">
      
      {/* Immersive Spatial Background Elements */}
      <div className="spatial-bg">
        <div className="spatial-orb orb-1" />
        <div className="spatial-orb orb-2" />
        <div className="spatial-orb orb-3" />
      </div>

      {/* Main Spatial Computing 'App Window' Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel w-full max-w-[1200px] h-[90vh] md:h-[85vh] rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col relative z-10 overflow-hidden ring-1 ring-white/10"
      >
        
        {/* Decorative inner glow for glass effect depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[3.5rem]" />
        
        <Navbar />

        <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
          <div className="px-6 md:px-16 pt-12 md:pt-20 pb-16 flex-1 flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mb-12 max-w-2xl"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium tracking-widest uppercase mb-8 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                VisionOS Environment
              </div>
              
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
                Media Extraction.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-pink-300">Reimagined.</span>
              </h1>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-xl mx-auto">
                A seamless, immersive experience for securing high-fidelity media directly to your device without the noise.
              </p>
            </motion.div>

            <Downloader />

          </div>
          
          <div className="mt-auto py-6 border-t border-white/5 w-full flex justify-center backdrop-blur-md bg-black/20 z-20">
            <span className="text-[10px] font-medium text-white/30 tracking-widest uppercase">
              Designed for Spatial Web · Snapvio 2026
            </span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default App;
