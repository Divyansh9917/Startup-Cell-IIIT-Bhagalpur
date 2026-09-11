import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import OurTeam from './pages/OurTeam';
import IncubationCenter from './pages/IncubationCenter';
import Startups from './pages/Startups';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#EEE3D4] text-[#292825]">
        <ScrollToTop />
        <Navbar />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/incubation" element={<IncubationCenter />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<OurTeam />} />

            {/* Clean Redirects */}
            <Route path="/our-story" element={<Navigate to="/story" replace />} />
            <Route path="/our-team" element={<Navigate to="/team" replace />} />
            <Route path="/incubation-center" element={<Navigate to="/incubation" replace />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
