import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Link2, Loader2, PlaySquare, HardDrive, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
      setError('Unable to securely extract media. Please verify the URL syntax or ensure the target is public.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col pt-12 lg:pt-24 px-6 lg:px-16 pb-16">
      
      {/* Header for Right Panel */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-green-200">
           <ShieldCheck size={14} /> System Online
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-none">Initialize Extraction</h2>
        <p className="text-slate-500 text-lg font-medium max-w-lg">Provide the target network URL below to extract and analyze available media streams.</p>
      </div>

      {/* Input Section */}
      <form onSubmit={handleDownload} className="relative group max-w-2xl">
         <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors duration-300">
            <Link2 size={28} strokeWidth={2.5} />
         </div>
         <input 
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-white border-2 border-slate-200 focus:border-blue-500 rounded-3xl py-8 pl-16 pr-40 text-xl md:text-2xl text-slate-900 font-semibold outline-none shadow-sm transition-all focus:shadow-[0_0_40px_rgba(59,130,246,0.15)] focus:-translate-y-1"
            placeholder="Paste network URL..."
            autoComplete="off"
            spellCheck="false"
         />
         <button 
           disabled={loading || !url}
           className="absolute inset-y-3 right-3 px-8 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-3 transition-colors disabled:opacity-30 disabled:hover:bg-slate-900 shadow-md text-lg"
         >
           {loading ? <Loader2 size={24} className="animate-spin" /> : <ArrowDown size={24} strokeWidth={3} />}
           <span className="hidden sm:block">{loading ? 'Working' : 'FETCH'}</span>
         </button>
      </form>

      {/* Result Section */}
      <div className="mt-16 flex-1 flex flex-col max-w-3xl">
        <AnimatePresence mode="wait">
          {error && (
            <motion.div 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.98 }}
               className="bg-red-50 border-2 border-red-100 text-red-700 p-6 rounded-2xl flex items-start gap-4 font-medium shadow-sm"
            >
               <div className="p-2 bg-red-100 rounded-full mt-1"><ShieldCheck size={20} className="text-red-600" /></div>
               <div>
                 <h4 className="font-bold text-red-900 text-lg mb-1">Extraction Failed</h4>
                 <p className="opacity-90 leading-relaxed">{error}</p>
               </div>
            </motion.div>
          )}

          {result && (
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row gap-10"
             >
                <div className="w-full md:w-[280px] relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200/50 shadow-inner group">
                   <img src={result.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Media Preview" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                   <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-slate-900 text-xs font-black uppercase tracking-widest shadow-sm">
                     <CheckCircle2 size={14} className="text-green-600" />
                     {result.platform}
                   </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                   <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight tracking-tight">{result.title}</h3>
                   <p className="text-slate-500 font-medium mb-10 border-b border-slate-100 pb-6">Select your preferred format to initiate transfer.</p>
                   
                   <div className="space-y-4 mt-auto">
                     {result.medias.map((m, i) => (
                       <a 
                         key={i} 
                         href={m.url} 
                         className="flex items-center justify-between p-5 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50/50 transition-all group cursor-pointer bg-white shadow-sm"
                       >
                         <div className="flex items-center gap-5">
                           <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                             <PlaySquare size={24} />
                           </div>
                           <div className="flex flex-col gap-1">
                             <div className="font-black text-slate-900 group-hover:text-blue-700 transition-colors text-lg leading-none">{m.quality}</div>
                             <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{m.type}</div>
                           </div>
                         </div>
                         <div className="flex items-center gap-5">
                           <span className="text-sm font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">{m.size}</span>
                           <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-md">
                             <ArrowDown size={20} strokeWidth={3} />
                           </div>
                         </div>
                       </a>
                     ))}
                   </div>
                </div>
             </motion.div>
          )}
          
          {!result && !error && !loading && (
             <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-400/60 h-full py-20 border-2 border-dashed border-slate-200 rounded-[2rem] bg-slate-50/50">
                <ShieldCheck size={56} className="mb-6 text-slate-300" strokeWidth={1.5} />
                <p className="font-semibold text-lg max-w-sm text-slate-500">System idle.</p>
                <p className="font-medium max-w-sm text-slate-400">Waiting for valid input URL to begin extraction sequence.</p>
             </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
export default Downloader;
