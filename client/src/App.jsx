import React from 'react';
import Navbar from './components/Navbar';
import Downloader from './components/Downloader';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-white/20">
      <Navbar />
      
      <main className="flex-1 flex flex-col relative pt-32 pb-20">
        {/* Subtle top spotlight to give a premium feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />
        
        <Downloader />
        
        <section className="max-w-5xl mx-auto px-6 mt-40 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 relative z-10">
          <div>
            <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-gray-300 bg-white/[0.02]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-white font-medium mb-3 tracking-tight text-lg">Lightning Fast</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-light">Direct extraction techniques ensure your media starts downloading almost instantly, skipping the wait entirely.</p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-gray-300 bg-white/[0.02]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 className="text-white font-medium mb-3 tracking-tight text-lg">Zero Tracking</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-light">We don't log your downloads, track your IP, or serve intrusive ads. Experience genuine privacy on the web.</p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-gray-300 bg-white/[0.02]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-white font-medium mb-3 tracking-tight text-lg">Raw Quality</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-light">Extract the highest bitrate streams from the source network without compression or quality loss.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.05] py-8 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 font-medium">
          <p>© {new Date().getFullYear()} Snapvio Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
