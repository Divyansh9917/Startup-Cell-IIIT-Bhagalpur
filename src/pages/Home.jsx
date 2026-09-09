import Hero from '../Hero';
import About from '../About';
import Stats from '../Stats';
import HomeStartupsPreview from '../components/HomeStartupsPreview';
import DirectorDesk from '../DirectorDesk';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <HomeStartupsPreview />
      <DirectorDesk />
    </main>
  );
}
