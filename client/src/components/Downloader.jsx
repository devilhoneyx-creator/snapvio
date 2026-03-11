import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Loader2, Link2, Film, Music, CheckCircle2, AlertCircle } from 'lucide-react';

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
      setError('Failed to fetch media. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full relative z-10">
      
      {/* Search Input Box */}
      <form onSubmit={handleDownload} className="relative max-w-2xl mx-auto mb-12">
         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Link2 className="text-zinc-500" size={24} />
         </div>
         <input 
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste video or audio link here..."
            className="w-full h-16 bg-zinc-900 border border-zinc-700/80 rounded-2xl pl-12 pr-[140px] text-lg text-white placeholder:text-zinc-500 subtle-ring shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            required
            autoComplete="off"
            spellCheck="false"
         />
         <div className="absolute inset-y-1.5 right-1.5">
           <button 
             type="submit"
             disabled={loading || !url}
             className="h-full px-6 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium rounded-xl flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
           >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
              <span className="hidden sm:inline">{loading ? 'Fetching' : 'Download'}</span>
           </button>
         </div>
      </form>

      {/* Results Area */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-card p-4 border-red-500/30 bg-red-500/10 flex items-center gap-3 text-red-400 max-w-xl mx-auto"
            >
              <AlertCircle size={20} className="shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </motion.div>
          )}

          {result && (
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="glass-card overflow-hidden"
             >
                <div className="flex flex-col md:flex-row border-b border-zinc-800/50">
                   
                   {/* Thumbnail Side */}
                   <div className="md:w-[280px] p-6 flex flex-col items-center justify-center bg-zinc-900/40 relative">
                     <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 relative shadow-lg">
                        <img src={result.thumbnail} alt="Thumbnail preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                     </div>
                     <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full">
                       <CheckCircle2 size={14} /> Ready: {result.platform}
                     </div>
                   </div>

                   {/* Detail Side */}
                   <div className="flex-1 p-6 md:p-8 flex flex-col justify-center text-left">
                     <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug line-clamp-2">
                       {result.title}
                     </h2>
                     <p className="text-zinc-400 text-sm mb-6">File analyzed successfully. Choose your format below.</p>
                     
                     <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-1 inline-flex w-fit mb-4">
                       <button className="px-4 py-1.5 rounded-lg text-sm font-medium bg-zinc-800 text-white shadow-sm flex items-center gap-2">
                          <Film size={16} /> Video
                       </button>
                       <button className="px-4 py-1.5 rounded-lg text-sm font-medium text-zinc-500 hover:text-zinc-300 flex items-center gap-2 transition-colors">
                          <Music size={16} /> Audio Only
                       </button>
                     </div>
                   </div>
                </div>

                {/* Download Links Grid */}
                <div className="bg-zinc-900/80 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {result.medias.map((m, i) => (
                    <a 
                      key={i}
                      href={m.url}
                      className="group p-4 bg-zinc-800/40 hover:bg-zinc-800 hover:border-zinc-600 border border-zinc-700/50 rounded-xl flex items-center justify-between transition-all"
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-white group-hover:text-blue-400 transition-colors">{m.quality}</span>
                        <span className="text-xs font-medium text-zinc-500 uppercase">{m.type} • {m.size}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Download size={16} />
                      </div>
                    </a>
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
