import Hero from './sections/Hero.tsx';
import Showcase from '@/sections/Showcase.tsx';
import NavBar from '@/components/NavBar.tsx';
import LogoSection from '@/sections/LogoSection.tsx';
import FeatureCards from '@/sections/FeatureCards.tsx';
import Experience from '@/sections/Experience.tsx';
import TechStack from '@/sections/TechStack.tsx';
import Testimonials from '@/sections/Testimonials.tsx';
import Contact from '@/sections/Contact.tsx';
import { Toaster } from 'sonner';
import Footer from '@/sections/Footer.tsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster richColors position="top-center" />
    </>
  );
};
export default App;
