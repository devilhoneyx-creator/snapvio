import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Link as LinkIcon, Loader2, AlertCircle } from 'lucide-react';

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
      const response = await axios.post('http://localhost:5000/api/download/info', { url });
      setResult(response.data);
    } catch (err) {
      setError('Failed to fetch video info. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Download Your Favorite <span className="text-primary">Videos</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Support for Instagram, Facebook, TikTok, YouTube, and more.
        </p>
      </motion.div>

      <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
        <form onSubmit={handleDownload} className="relative flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <LinkIcon size={20} />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
              placeholder="Paste your link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-primary hover:bg-primary/80 text-white rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />}
            {loading ? 'Fetching...' : 'Download'}
          </button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 flex items-center gap-3"
            >
              <AlertCircle size={20} />
              {error}
            </motion.div>
          )}

          {result && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 space-y-8"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <img src={result.thumbnail} alt="Thumbnail" className="w-full h-auto rounded-2xl border border-white/10" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
                    {result.platform}
                  </div>
                  <h2 className="text-2xl font-bold text-white leading-tight">{result.title}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {result.medias.map((media, idx) => (
                      <a
                        key={idx}
                        href={media.url}
                        className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-gray-300"
                      >
                        <span className="font-medium text-white">{media.quality} ({media.type})</span>
                        <span className="text-sm text-gray-400">{media.size}</span>
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
