import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Link as LinkIcon, Loader2, AlertCircle, Sparkles, Monitor, Tablet, Smartphone, CheckCircle2 } from 'lucide-react';

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
      // Use the actual production API endpoint
      const response = await axios.post('/api/download/info', { url });
      setResult(response.data);
    } catch (err) {
      setError('Failed to fetch video info. Please verify the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pt-44 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8"
        >
          <Sparkles size={14} />
          <span>Universal AI Downloader</span>
        </motion.div>
        
        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
          Download Your Favorite <br /> 
          <span className="text-gradient">Social Content</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Instant, high-quality downloads from all major platforms. 
          No limits, no registration, just pure speed.
        </p>
      </motion.div>

      <motion.div 
        layout
        className="glass-card p-2 md:p-3 max-w-3xl mx-auto mb-16"
      >
        <form onSubmit={handleDownload} className="relative flex flex-col md:flex-row items-center gap-2">
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-primary">
              <LinkIcon size={20} />
            </div>
            <input
              type="text"
              className="block w-full pl-16 pr-6 py-6 bg-white/[0.03] border-none rounded-[2rem] text-white placeholder-gray-500 font-medium focus:ring-2 focus:ring-primary/40 transition-all outline-none"
              placeholder="Paste your link here (e.g. Instagram, TikTok...)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-10 py-6 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white rounded-[2rem] font-black transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 group"
          >
            {loading ? <Loader2 className="animate-spin" size={22} /> : <Download size={22} className="group-hover:translate-y-0.5 transition-transform" />}
            {loading ? 'Analyzing...' : 'DOWNLOAD'}
          </button>
        </form>
      </motion.div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mt-8 p-6 glass-card border-red-500/20 bg-red-500/5 text-red-400 flex items-center gap-4 max-w-2xl mx-auto"
          >
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle size={24} />
            </div>
            <p className="font-bold flex-1">{error}</p>
          </motion.div>
        )}

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-10 mt-12 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Download size={140} />
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-2/5 group">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img src={result.thumbnail} alt="Content Thumbnail" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                     <CheckCircle2 size={16} className="text-green-400" />
                     <span className="text-white text-sm font-black uppercase tracking-widest">{result.platform}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-white leading-tight mb-4">{result.title}</h2>
                  <p className="text-gray-400 font-medium">Available in multiple formats. Select your preferred quality below.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.medias.map((media, idx) => (
                    <motion.a
                      key={idx}
                      href={media.url}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.08] hover:border-primary/30 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          {media.quality.includes('1080') || media.quality.includes('4K') ? <Monitor size={20} /> : <Smartphone size={20} />}
                        </div>
                        <div>
                          <p className="text-white font-black">{media.quality}</p>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{media.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-black text-sm">{media.size}</p>
                        <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Size</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Downloader;
