import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Stats from './Stats';
import DirectorDesk from './DirectorDesk';
import Placeholder from './Placeholder';

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <DirectorDesk />
      <Placeholder id="story" title="Our Story" />
      <Placeholder id="gallery" title="Gallery" alt />
      <Placeholder id="team" title="Our Team" />
      <Placeholder id="incubation" title="Incubation Center" alt />
    </div>
  );
}
