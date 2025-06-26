import { Header } from './Header.tsx';
import HeroExperience from '@/components/HeroModels/HeroExperience.tsx';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

const Hero = () => {
  // useGSAP(() => {
  //   gsap.fromTo(
  //     '.hero-text h1',
  //     {
  //       y,
  //     },
  //     {}
  //   );
  // });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <Header />
        <figure>
          <div className="hero-3d-layout ">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};
export default Hero;
