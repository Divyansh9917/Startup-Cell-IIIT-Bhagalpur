import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import OurTeam from './pages/OurTeam';
import IncubationCenter from './pages/IncubationCenter';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#EEE3D4] text-[#292825]">
        <ScrollToTop />
        <Navbar />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/incubation" element={<IncubationCenter />} />
            <Route path="/incubation-center" element={<IncubationCenter />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
