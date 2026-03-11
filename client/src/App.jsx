import React from 'react';
import Downloader from './components/Downloader';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      
      {/* Top Marquee */}
      <div className="marquee-container bg-[#ff00ff] text-white">
        <div className="marquee-content pr-12">
          ⚡ SNAPVIO V6 ⚡ INSTANT MEDIA EXTRACTION ⚡ ZERO LOGS ⚡ MAXIMUM BITRATE ⚡ NO ACCOUNTS REQUIRED ⚡ SNAPVIO V6 ⚡ INSTANT MEDIA EXTRACTION ⚡
        </div>
        <div className="marquee-content pr-12 aria-hidden">
          ⚡ SNAPVIO V6 ⚡ INSTANT MEDIA EXTRACTION ⚡ ZERO LOGS ⚡ MAXIMUM BITRATE ⚡ NO ACCOUNTS REQUIRED ⚡ SNAPVIO V6 ⚡ INSTANT MEDIA EXTRACTION ⚡
        </div>
      </div>

      <Navbar />

      <main className="flex-1 max-w-[1400px] mx-auto w-full p-6 md:p-12 relative">
         
         {/* Hero Title - Overlapping elements */}
         <div className="relative mb-16 md:mb-32 mt-8">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter mix-blend-difference text-white z-10 relative pointer-events-none">
              RIP IT<br/>
              <span className="text-[#00ffcc] brutal-stroke">OFF THE</span><br/>
              INTERNET.
            </h1>
            
            {/* Decorative brutalist shapes */}
            <div className="absolute top-10 right-0 md:right-20 w-64 h-64 bg-[#ffff00] border-4 border-black shadow-[12px_12px_0_rgba(0,0,0,1)] rounded-full -z-10 animate-[bounce_10s_infinite]" />
            <div className="absolute -bottom-10 md:-bottom-20 left-10 md:left-1/3 w-48 h-48 bg-[#ff00ff] border-4 border-black shadow-[12px_12px_0_rgba(0,0,0,1)] -z-10 rotate-12" />
            <div className="absolute top-0 left-1/2 w-80 h-20 bg-[#00ffcc] border-4 border-black shadow-[12px_12px_0_rgba(0,0,0,1)] -z-10 -rotate-6" />
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Col: Main Interactive Tool */}
            <div className="lg:col-span-8 space-y-10">
               <div className="brutal-card p-6 md:p-12 bg-white">
                  <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-4 inline-block">Extract Media [v6.0.4]</h2>
                  <Downloader />
               </div>

               {/* Ad Block Main */}
               <div className="ad-block w-full h-[250px]">
                  <span className="text-4xl text-gray-400 mb-2">🚧</span>
                  ADVERTISEMENT SPACE
                  <span className="text-xs mt-2 text-gray-500 font-normal normal-case">Responsive Display Unit</span>
               </div>
            </div>

            {/* Right Col: Info / Ads / Chaos */}
            <div className="lg:col-span-4 space-y-10">
               
               <div className="brutal-card bg-[#ffff00] p-8 -rotate-2">
                 <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 mb-4">Supported Targets</h3>
                 <ul className="space-y-3 font-bold text-lg uppercase">
                   <li className="flex justify-between border-b-2 border-black/20 pb-1"><span>Instagram</span> <span>[ACTIVE]</span></li>
                   <li className="flex justify-between border-b-2 border-black/20 pb-1"><span>TikTok</span> <span>[ACTIVE]</span></li>
                   <li className="flex justify-between border-b-2 border-black/20 pb-1"><span>Twitter/X</span> <span>[ACTIVE]</span></li>
                   <li className="flex justify-between border-b-2 border-black/20 pb-1"><span>Facebook</span> <span>[ACTIVE]</span></li>
                   <li className="flex justify-between border-b-2 border-black/20 pb-1"><span>YouTube</span> <span>[ACTIVE]</span></li>
                 </ul>
               </div>

               {/* Ad Block Sidebar */}
               <div className="ad-block w-full h-[600px] border-l-8 border-l-[#ff00ff]">
                  <span className="text-4xl text-gray-400 mb-2">💰</span>
                  VERT AD SPACE
                  <span className="text-xs mt-2 text-gray-500 font-normal normal-case">300x600 Half Page</span>
               </div>
            </div>

         </div>

      </main>

      <footer className="border-t-8 border-black bg-white mt-20">
        <div className="marquee-container bg-[#00ffcc]">
           <div className="marquee-content pr-12" style={{ animationDirection: 'reverse' }}>
             ++ SNAPVIO INC ++ ALL RIGHTS RESERVED {new Date().getFullYear()} ++ SNAPVIO INC ++ ALL RIGHTS RESERVED {new Date().getFullYear()} ++
           </div>
           <div className="marquee-content pr-12 aria-hidden" style={{ animationDirection: 'reverse' }}>
             ++ SNAPVIO INC ++ ALL RIGHTS RESERVED {new Date().getFullYear()} ++ SNAPVIO INC ++ ALL RIGHTS RESERVED {new Date().getFullYear()} ++
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
