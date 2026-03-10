import React from 'react';
import Navbar from './components/Navbar';
import Downloader from './components/Downloader';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden bg-mesh">
      {/* Background blobs for premium depth */}
      <div className="blob left-[-10%] top-[-10%]" />
      <div className="blob blob-2 right-[-5%] top-[20%]" />
      <div className="blob left-[10%] bottom-[10%] opacity-50" />

      <Navbar />
      
      <main className="relative z-10">
        <Downloader />
        
        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 py-32 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="group glass-card p-8 hover:border-primary/30 transition-all duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast & Reliable</h3>
              <p className="text-gray-400 leading-relaxed">Our optimized engines handle download requests with lightning speed, ensuring you never have to wait.</p>
            </div>

            <div className="group glass-card p-8 hover:border-secondary/30 transition-all duration-500">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Safe & Anonymous</h3>
              <p className="text-gray-400 leading-relaxed">We prioritize your privacy. No registration required, no cookies tracked, and all requests are encrypted.</p>
            </div>

            <div className="group glass-card p-8 hover:border-accent/30 transition-all duration-500">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Ultra HD Quality</h3>
              <p className="text-gray-400 leading-relaxed">Download videos in their highest available resolution, providing you with the best visual experience.</p>
            </div>
          </motion.div>
        </section>
      </main>
      
      <footer className="relative z-10 py-16 border-t border-white/5 backdrop-blur-sm bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold opacity-80">Snapvio</span>. 
            Crafted with ❤️ by <span className="text-primary font-semibold">Subhadeep Hazra</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
