import React from 'react';
import Downloader from '../components/Downloader';
import { Youtube, Instagram, Twitter, Facebook } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Massive Hero strictly for Input */}
      <section className="w-full hero-gradient pt-16 md:pt-24 pb-32 px-4 relative">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Download Media Instantly
          </h1>
          <p className="text-slate-400 text-sm md:text-base mb-10 max-w-2xl mx-auto">
            Fast, secure, and free online video downloader. Paste any supported URL below to get started. 100% Mobile Ready.
          </p>
          
          <div className="w-full relative z-20">
            <Downloader />
          </div>
        </div>
      </section>

      {/* Utilitarian Feature Area below fold */}
      <section className="w-full bg-[#0f1115] pt-32 md:pt-40 pb-20 px-4 -mt-16 relative z-10 flex-1">
        <div className="max-w-[1000px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
             <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center">
               <Youtube className="text-red-500 mb-3" size={32} />
               <h3 className="text-white font-bold mb-1">YouTube</h3>
               <p className="text-slate-400 text-xs text-balance">Download up to 4K resolution.</p>
             </div>
             <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center">
               <Instagram className="text-pink-500 mb-3" size={32} />
               <h3 className="text-white font-bold mb-1">Instagram</h3>
               <p className="text-slate-400 text-xs text-balance">Save Reels, Posts, and IGTV.</p>
             </div>
             <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center">
               <Facebook className="text-blue-500 mb-3" size={32} />
               <h3 className="text-white font-bold mb-1">Facebook</h3>
               <p className="text-slate-400 text-xs text-balance">High quality public videos.</p>
             </div>
             <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center">
               <Twitter className="text-white mb-3" size={32} />
               <h3 className="text-white font-bold mb-1">Twitter / X</h3>
               <p className="text-slate-400 text-xs text-balance">Extract fast moving media.</p>
             </div>
          </div>

          <div className="bg-[#1e293b]/50 rounded-3xl p-8 border border-slate-700/30">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">How to use Snapvio?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                 <div className="w-10 h-10 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center font-bold text-lg mb-3">1</div>
                 <h4 className="text-white font-semibold mb-2">Copy the URL</h4>
                 <p className="text-slate-400 text-sm">Copy the link of the video or audio from the source website.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                 <div className="w-10 h-10 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center font-bold text-lg mb-3">2</div>
                 <h4 className="text-white font-semibold mb-2">Paste the Link</h4>
                 <p className="text-slate-400 text-sm">Paste it into the search box at the top of this page.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                 <div className="w-10 h-10 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center font-bold text-lg mb-3">3</div>
                 <h4 className="text-white font-semibold mb-2">Download</h4>
                 <p className="text-slate-400 text-sm">Choose your preferred format and quality, then click download.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
