import React from 'react';
import Navbar from './components/Navbar';
import Downloader from './components/Downloader';
import { Youtube, Instagram, Twitter, Facebook, Shield, Zap, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Zap size={16} /> Fast, Secure, and Free
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Universal Media Downloader
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10">
            Download high-quality videos and audio from your favorite platforms instantly. Simply paste the URL below to begin.
          </p>

          <Downloader />
        </section>

        {/* Feature/Platform Highlights */}
        <section className="mt-24 md:mt-32 border-t border-zinc-800/50 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Supported Platforms</h2>
            <p className="text-zinc-500">We support extraction from major social and video platforms in highest available quality.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
               { name: 'YouTube', icon: Youtube, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
               { name: 'Instagram', icon: Instagram, color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
               { name: 'X / Twitter', icon: Twitter, color: 'text-zinc-100', bg: 'bg-zinc-100/10', border: 'border-zinc-100/20' },
               { name: 'Facebook', icon: Facebook, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
            ].map((platform) => (
              <div key={platform.name} className={`glass-card p-6 flex flex-col items-center justify-center text-center border ${platform.border} hover:bg-zinc-800/50 transition-colors`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${platform.bg} ${platform.color}`}>
                  <platform.icon size={24} />
                </div>
                <h3 className="font-semibold text-zinc-200">{platform.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8">
            <Shield className="text-emerald-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">100% Safe & Secure</h3>
            <p className="text-zinc-400 leading-relaxed">No tracking, no logs, and no intrusive ads. Your downloads are processed securely and privately.</p>
          </div>
          <div className="glass-card p-8">
            <Zap className="text-amber-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
            <p className="text-zinc-400 leading-relaxed">Our optimized extraction engine pulls media streams at the maximum available bandwidth.</p>
          </div>
          <div className="glass-card p-8">
            <Download className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">High Quality</h3>
            <p className="text-zinc-400 leading-relaxed">Download videos in 1080p, 4K, or extract crystal clear 320kbps audio formats instantly.</p>
          </div>
        </section>

      </main>

      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8 text-center text-zinc-500 text-sm mt-auto">
        <p>&copy; {new Date().getFullYear()} Snapvio. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-60">This tool is designed for downloading publicly available media for personal use.</p>
      </footer>
    </div>
  );
}

export default App;
