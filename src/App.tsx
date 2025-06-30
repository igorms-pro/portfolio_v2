import Hero from './sections/Hero.tsx';
import ShowcaseSection from '@/sections/ShowcaseSection.tsx';
import NavBar from '@/components/NavBar.tsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
    </>
  );
};
export default App;
