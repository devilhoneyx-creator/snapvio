import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Link2, Loader2, ArrowRight, Play, HardDrive, CheckCircle2, AlertTriangle } from 'lucide-react';

const Downloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setResult(null);
    setError('');

    try {
      const response = await axios.post('/api/download/info', { url });
      setResult(response.data);
    } catch (err) {
      setError('Unable to analyze URL. Please check your connection and the link syntax.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      
      {/* Search Input Area */}
      <form onSubmit={handleDownload} className="w-full relative group z-20">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/40 group-focus-within:text-indigo-400 transition-colors duration-500">
           <Link2 size={24} strokeWidth={2} />
        </div>
        <input 
          type="text" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste URL to process..." 
          className="glass-input w-full h-[72px] rounded-[2rem] pl-[68px] pr-[140px] text-xl font-medium text-white placeholder:text-white/30"
          autoComplete="off"
          spellCheck="false"
        />
        <button 
          disabled={loading || !url}
          className="absolute inset-y-2.5 right-2.5 px-6 rounded-[1.5rem] bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-400/30 text-indigo-100 font-semibold flex items-center gap-2 transition-all duration-300 disabled:opacity-30 disabled:hover:bg-indigo-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)]"
        >
           {loading ? <Loader2 size={20} className="animate-spin" /> : <span>Extract</span>}
           {!loading && <ArrowRight size={18} strokeWidth={2.5} />}
        </button>
      </form>

      <div className="w-full mt-8 relative z-10 flex-1 flex flex-col min-h-[400px]">
        <AnimatePresence mode="wait">
          
          {!result && !error && !loading && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="flex-1 flex flex-col items-center justify-center text-white/30"
             >
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/[0.02]">
                   <Link2 size={32} strokeWidth={1.5} />
                </div>
                <p className="text-lg font-light tracking-wide text-center max-w-xs">
                   Awaiting valid media URL for high-fidelity extraction.
                </p>
             </motion.div>
          )}

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full p-5 rounded-[2rem] border border-red-500/30 bg-red-500/10 backdrop-blur-md flex items-start gap-4 text-red-100 shadow-[0_0_30px_rgba(239,68,68,0.1)]"
            >
               <AlertTriangle size={24} className="text-red-400 shrink-0 mt-0.5" />
               <div className="flex flex-col">
                 <h4 className="font-semibold text-lg mb-1">Processing Error</h4>
                 <p className="opacity-80 text-sm leading-relaxed">{error}</p>
               </div>
            </motion.div>
          )}

          {result && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full h-full flex flex-col"
            >
               <div className="glass-panel rounded-[2rem] p-6 mb-6 flex items-center gap-6">
                 
                 <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                    <img src={result.thumbnail} alt="Media Preview" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-green-400 text-xs font-bold uppercase tracking-widest bg-black/40 px-2 py-1 rounded backdrop-blur-md">
                      <CheckCircle2 size={12} /> {result.platform}
                    </div>
                 </div>

                 <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-semibold text-white mb-2 truncate" title={result.title}>{result.title}</h2>
                    <p className="text-white/50 text-sm font-medium">Select your preferred stream quality.</p>
                 </div>
               </div>

               <div className="w-full space-y-3 pb-8">
                 {result.medias.map((m, i) => (
                    <motion.a 
                      key={i} 
                      href={m.url}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="glass-button w-full p-4 rounded-[1.5rem] flex items-center justify-between group cursor-pointer"
                    >
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-all duration-300 shadow-inner">
                           <Play size={20} className="ml-1" />
                         </div>
                         <div className="flex flex-col">
                           <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">{m.quality}</span>
                           <span className="text-xs font-bold text-white/40 uppercase tracking-widest mt-0.5">{m.type}</span>
                         </div>
                       </div>
                       
                       <div className="flex items-center gap-4">
                         <div className="flex items-center gap-2 text-sm font-medium text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/[0.05]">
                           <HardDrive size={14} /> {m.size}
                         </div>
                         <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                           <ArrowRight size={18} strokeWidth={2.5} />
                         </div>
                       </div>
                    </motion.a>
                 ))}
               </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
};

export default Downloader;
