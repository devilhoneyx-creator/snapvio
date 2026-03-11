import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Downloader from './components/Downloader';
import { motion } from 'framer-motion';

function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-x-hidden">
      <div className="saas-mesh-bg" />
      
      <Navbar />
      
      <main className="flex-1 flex flex-col relative pt-32 pb-24 z-10">
        <Downloader />
        
        <section className="max-w-6xl mx-auto px-6 mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            {
              title: "Blazing Fast Speeds",
              desc: "Experience zero buffering. Our global CDN network guarantees the fastest download speeds available anywhere.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
              color: "text-pink-500",
              bg: "bg-pink-50"
            },
            {
              title: "Complete Privacy",
              desc: "Your data is yours. We process requests in memory, leaving no trace, no logs, and requiring zero sign-ups.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
              color: "text-violet-500",
              bg: "bg-violet-50"
            },
            {
              title: "Pristine Quality",
              desc: "Extract exactly what you want. Choose between raw 4K resolutions or optimized audio formats instantly.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
              color: "text-sky-500",
              bg: "bg-sky-50"
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="saas-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feature.icon}</svg>
              </div>
              <h3 className="text-slate-900 font-bold mb-3 text-xl tracking-tight">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>
      </main>

      <footer className="border-t border-slate-200/60 bg-white/50 backdrop-blur-md py-10 mt-auto relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-slate-900 font-bold tracking-tight">Snapvio</span>
          </div>
          <p className="text-sm text-slate-500 font-medium">© {new Date().getFullYear()} Designed carefully by Subhadeep Hazra.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
