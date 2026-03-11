import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-16 text-slate-300">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 border-b border-slate-700 pb-4">About Us</h1>
      
      <p className="mb-6 leading-relaxed">
        Welcome to <strong>Snapvio</strong>. We are a dedicated team of developers and tech enthusiasts who believe in making digital media accessible and easy to manage.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-4">Our Mission</h2>
      <p className="mb-6 leading-relaxed">
        Our mission at Snapvio is simple: to provide the fastest, safest, and most user-friendly utility for extracting public media URLs. In a world where digital content is scattered across numerous platforms, we recognized the need for a unified, clean, and reliable tool to help users save their favorite moments for offline viewing.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-4">Why Snapvio?</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-slate-400">
        <li><strong>Speed:</strong> Our backend architecture is optimized to parse and extract links almost instantly.</li>
        <li><strong>Privacy First:</strong> We do not log your download history. We do not store the files you extract. Your privacy is paramount.</li>
        <li><strong>Ease of Use:</strong> No shady popups, no confusing interfaces. Just a clean, utilitarian design that gets the job done.</li>
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-4">Meet the Creator</h2>
      <p className="mb-6 leading-relaxed">
        Snapvio was designed and developed by Subhadeep Hazra, focusing on clean code, modern aesthetics, and unparalleled user experience. We are continuously working to improve the platform and expand our supported platforms list.
      </p>
      
      <p className="mt-12 text-center text-slate-500 italic">
        "Empowering users to securely manage their digital media."
      </p>
    </div>
  );
};

export default AboutUs;
