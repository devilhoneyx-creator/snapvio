import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Fallback 404 route to Home for now */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
