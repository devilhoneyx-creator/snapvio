import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

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
      setError('ERROR: EXTRACTION FAILED. INVALID TARGET OR BLOCK DETECTED.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full font-['Space_Grotesk']">
      
      {/* Brutalist Input Area */}
      <form onSubmit={handleDownload} className="flex flex-col gap-6">
         <div>
           <label className="block text-xl font-black uppercase mb-2">Target URL_</label>
           <input 
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="brutal-input w-full p-6 text-2xl md:text-3xl font-bold bg-[#ffff00]"
              placeholder="HTTPS://..."
              autoComplete="off"
           />
         </div>
         <button 
           disabled={loading || !url}
           className="brutal-button w-full sm:w-auto self-end disabled:opacity-50 disabled:bg-gray-300 disabled:cursor-not-allowed"
         >
           {loading ? 'EXECUTING...' : 'INITIALIZE SEQUENCE'}
         </button>
      </form>

      <AnimatePresence>
         {error && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-8 overflow-hidden"
            >
               <div className="brutal-card-color bg-red-600 p-6 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl mb-4">⚠️</span>
                  <h3 className="text-3xl font-black uppercase">{error}</h3>
               </div>
            </motion.div>
         )}

         {result && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-12 brutal-card p-6"
            >
               <div className="flex flex-col md:flex-row gap-8">
                  
                  {/* Media Preview */}
                  <div className="w-full md:w-1/3 relative border-4 border-black group">
                     <div className="absolute top-2 left-2 bg-black text-[#00ffcc] font-black uppercase px-2 py-1 z-10 text-sm">
                        {result.platform} TARGET
                     </div>
                     <img src={result.thumbnail} alt="Target" className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                  </div>
                  
                  {/* Results Data */}
                  <div className="w-full md:w-2/3 flex flex-col">
                     <h2 className="text-3xl md:text-4xl font-black uppercase leading-none mb-4 border-b-4 border-black pb-4">
                        {result.title}
                     </h2>
                     <p className="font-bold text-xl uppercase mb-6 bg-black text-[#ffff00] inline-block px-3 py-1 self-start">
                        PAYLOAD READY FOR EXTRACT
                     </p>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                        {result.medias.map((m, i) => (
                           <a 
                             key={i} 
                             href={m.url} 
                             className="brutal-card bg-[#f0f0f0] hover:bg-[#ff00ff] hover:text-white p-4 flex flex-col justify-between group cursor-pointer"
                           >
                              <div className="flex justify-between items-start mb-4">
                                 <span className="font-black text-2xl uppercase tracking-tighter">{m.quality}</span>
                                 <span className="border-2 border-black px-2 py-1 font-bold text-xs bg-white text-black group-hover:bg-black group-hover:text-white transition-colors">
                                   {m.type}
                                 </span>
                              </div>
                              <div className="flex justify-between items-end border-t-2 border-black/20 pt-2 group-hover:border-white/50">
                                 <span className="font-mono font-bold text-sm">SIZE: {m.size}</span>
                                 <span className="font-black uppercase text-xl animate-[pulse_1s_infinite]">GET_</span>
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
  );
}

export default Downloader;
