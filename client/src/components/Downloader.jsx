import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, AlertTriangle, PlayCircle, DownloadCloud } from 'lucide-react';

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
      setError('Extraction failed. Please verify the URL syntax and target availability.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 flex flex-col items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full flex flex-col items-center mt-12"
      >
        <div className="h-6 px-3 border border-white/10 rounded-full flex items-center gap-2 mb-10 bg-white/[0.02] text-[11px] font-medium text-gray-400 select-none shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Engine v2.4 Operational
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 text-center leading-[1.1]">
          Extract <span className="text-gray-600">content.</span>
        </h1>
        <p className="text-gray-400 text-lg text-center max-w-lg mb-14 font-light tracking-wide">
          Paste a link from major social networks to securely retrieve the underlying media streams in high fidelity.
        </p>

        <form onSubmit={handleDownload} className="w-full relative group">
          <div className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
          
          <div className="relative flex items-center bg-[#070707] border border-white/[0.12] rounded-[20px] shadow-2xl overflow-hidden transition-all duration-300 focus-within:border-white/30 focus-within:bg-[#0a0a0a]">
            <input
              type="text"
              className="w-full bg-transparent px-6 py-6 text-lg text-white placeholder-gray-600 outline-none font-light"
              placeholder="https://"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
            <div className="pr-3 pl-2">
              <button
                type="submit"
                disabled={loading || !url}
                className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-[14px] hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" size={20} strokeWidth={2.5} /> : <ArrowRight size={20} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </form>
      </motion.div>

      <div className="w-full min-h-[300px]">
        <AnimatePresence mode="wait">
          {error && (
            <motion.div 
              key="error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full mt-8 flex items-center gap-3 text-red-400 border border-red-500/20 py-4 px-5 rounded-xl text-sm bg-red-500/5 shadow-inner"
            >
              <AlertTriangle size={18} />
              <span className="font-medium">{error}</span>
            </motion.div>
          )}

          {result && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="w-full mt-12 bg-[#050505] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle tech background element */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 text-white/[0.02] pointer-events-none">
                 <DownloadCloud size={250} strokeWidth={0.5} />
              </div>

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                <div className="w-full md:w-56 flex-shrink-0">
                  <div className="aspect-square bg-[#111] rounded-xl border border-white/5 overflow-hidden relative group">
                    <img src={result.thumbnail} alt="Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white tracking-widest uppercase border border-white/10 shadow-sm">
                      {result.platform}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-xl font-medium text-white mb-6 line-clamp-2 leading-snug tracking-tight">
                    {result.title}
                  </h2>
                  
                  <div className="space-y-2">
                    {result.medias.map((media, idx) => (
                      <a
                        key={idx}
                        href={media.url}
                        className="group flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-200">
                            <PlayCircle size={16} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-200">
                              {media.quality}
                            </span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                              {media.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-gray-500">{media.size}</span>
                          <div className="p-1.5 rounded bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors duration-200">
                             <DownloadCloud size={14} strokeWidth={2.5} />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Downloader;
