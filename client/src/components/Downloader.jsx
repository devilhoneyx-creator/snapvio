import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Link as LinkIcon, Loader2, PlayCircle, HardDrive, AlertCircle } from 'lucide-react';

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
      setError('Unable to fetch media info. Please ensure the link is public and supported.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
          Engine v3 is Live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
          Save your media. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500">Without limits.</span>
        </h1>
        
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          Instantly download videos and audio from Instagram, TikTok, Twitter, and more. Maximum quality, zero tracking.
        </p>
      </motion.div>

      <motion.div 
        layout
        className="saas-card p-3 max-w-3xl mx-auto backdrop-blur-xl bg-white/80"
      >
        <form onSubmit={handleDownload} className="relative flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 flex items-center">
            <div className="absolute left-5 text-slate-400">
              <LinkIcon size={22} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              className="w-full pl-14 pr-6 py-5 bg-transparent text-slate-900 placeholder-slate-400 font-medium text-lg outline-none"
              placeholder="Paste any social media link..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading || !url}
            className="saas-button h-[64px] px-10 rounded-2xl font-bold flex items-center justify-center gap-2 text-lg active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            {loading ? <Loader2 className="animate-spin" size={24} /> : <Download size={24} strokeWidth={2.5} />}
            <span>{loading ? 'Processing' : 'Extract'}</span>
          </button>
        </form>
      </motion.div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.div 
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="max-w-3xl mx-auto overflow-hidden"
          >
            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 font-medium shadow-sm">
              <AlertCircle size={20} className="text-red-500" />
              {error}
            </div>
          </motion.div>
        )}

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto mt-16 saas-card overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Media Preview Side */}
              <div className="w-full md:w-[320px] bg-slate-50 border-r border-slate-100 p-6 flex flex-col items-center justify-center relative">
                <div className="absolute top-4 left-4 px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-full text-xs font-bold text-slate-700 uppercase tracking-wider z-10">
                  {result.platform}
                </div>
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md group">
                  <img src={result.thumbnail} alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                </div>
              </div>

              {/* Data & Downloads Side */}
              <div className="flex-1 p-8 flex flex-col">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                  {result.title}
                </h2>
                <p className="text-slate-500 font-medium mb-8">Ready to download. Select your format.</p>

                <div className="grid gap-3 mt-auto">
                  {result.medias.map((media, idx) => (
                    <motion.a
                      key={idx}
                      href={media.url}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:border-violet-300 hover:shadow-[0_8px_30px_rgb(139,92,246,0.12)] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors">
                          <PlayCircle size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                            {media.quality}
                          </div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                            {media.type}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                          <HardDrive size={12} />
                          {media.size}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-sm">
                          <Download size={14} strokeWidth={3} />
                        </div>
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
