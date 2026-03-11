import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Download, AlertCircle, ArrowRightCircle } from 'lucide-react';

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
      setError('Error parsing link. Make sure the URL is public and supported.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      
      {/* Massive Prominent Input Bar */}
      <form onSubmit={handleDownload} className="relative max-w-3xl mx-auto input-shadow rounded-2xl md:rounded-full bg-[#1e293b] border border-slate-700 p-2 flex flex-col md:flex-row gap-2">
         <input 
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your video link here"
            className="w-full h-14 md:h-16 bg-transparent pl-6 pr-4 text-white text-lg placeholder:text-slate-500 focus:outline-none"
            required
            autoComplete="off"
            spellCheck="false"
         />
         <button 
            type="submit"
            disabled={loading || !url}
            className="h-14 md:h-16 w-full md:w-auto px-8 md:px-10 rounded-xl md:rounded-full btn-green flex items-center justify-center gap-2 text-lg shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
         >
            {loading ? (
              <><Loader2 size={24} className="animate-spin" /> Processing</>
            ) : (
              <>Download <ArrowRightCircle size={22} /></>
            )}
         </button>
      </form>

      {/* Under-search disclaimer/info */}
      <p className="text-slate-500 text-xs mt-4 text-center">
        By using our service you accept our Terms of Service.
      </p>

      {/* Results Area */}
      <div className="max-w-4xl mx-auto mt-10">
        <AnimatePresence mode="wait">
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center justify-center gap-3 text-red-400 font-medium"
            >
              <AlertCircle size={20} />
              {error}
            </motion.div>
          )}

          {result && (
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="bg-[#1e293b] border border-slate-700 rounded-2xl p-4 md:p-6 shadow-xl flex flex-col md:flex-row gap-6 md:gap-8"
             >
                {/* Visual Identity */}
                <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-3">
                   <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-slate-800">
                      <img src={result.thumbnail} alt="Thumbnail preview" className="w-full h-full object-cover" />
                   </div>
                   <div className="inline-flex self-start items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#10b981] bg-[#10b981]/10 px-3 py-1.5 rounded">
                     {result.platform}
                   </div>
                   <h2 className="text-white font-bold text-lg leading-snug line-clamp-3">
                     {result.title}
                   </h2>
                </div>

                {/* Download Options */}
                <div className="flex-1 flex flex-col">
                   <h3 className="text-slate-300 font-semibold mb-4 pb-2 border-b border-slate-700">Download Links</h3>
                   
                   <div className="flex flex-col gap-2">
                     {result.medias.map((m, i) => (
                        <a 
                          key={i}
                          href={m.url}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-500 transition-colors group"
                        >
                           <div className="flex items-center gap-4">
                              <span className="font-bold text-white text-lg w-16">{m.quality}</span>
                              <span className="text-xs font-bold uppercase text-slate-400 bg-slate-800 px-2 py-1 rounded">{m.type}</span>
                           </div>
                           <div className="flex items-center gap-4">
                              <span className="text-sm font-medium text-slate-300 hidden sm:block">{m.size}</span>
                              <button className="bg-[#10b981] hover:bg-[#059669] text-white p-2 rounded-md shadow-sm transition-colors flex items-center gap-1.5 text-sm font-bold">
                                 <Download size={16} /> 
                                 <span className="hidden sm:inline">Download</span>
                              </button>
                           </div>
                        </a>
                     ))}
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
