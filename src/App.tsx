import Hero from './sections/Hero.tsx';
import Showcase from '@/sections/Showcase.tsx';
import NavBar from '@/components/NavBar.tsx';
import LogoSection from '@/sections/LogoSection.tsx';
import FeatureCards from '@/sections/FeatureCards.tsx';
import Experience from '@/sections/Experience.tsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
      <Experience />
    </>
  );
};
export default App;
