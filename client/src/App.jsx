import React from 'react';
import Navbar from './components/Navbar';
import Downloader from './components/Downloader';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100">
      <Navbar />
      <main>
        <Downloader />
        
        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold">Fast Downloads</h3>
              <p className="text-gray-400">Optimized engines for blistering fast download speeds across all platforms.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto text-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold">Safe & Secure</h3>
              <p className="text-gray-400">Total privacy and security. We don't store your personal data or login info.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto text-purple-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold">High Quality</h3>
              <p className="text-gray-400">Download in the best possible resolution, up to 4K and 1080p HD.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Snapvio. Design By Subhadeep Hazra.</p>
      </footer>
    </div>
  );
}

export default App;
