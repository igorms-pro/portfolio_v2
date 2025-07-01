import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionQfourUsRef = useRef<HTMLDivElement | null>(null);
  const sectionHealthLinkRef = useRef<HTMLDivElement | null>(null);
  const sectionRideWaveRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    console.log('TEST ENV:', import.meta.env.VITEST); // true when running vitest

    if (import.meta.env.VITEST) return;
    const projectsCards = [
      sectionQfourUsRef.current,
      sectionHealthLinkRef.current,
      sectionRideWaveRef.current,
    ];
    projectsCards.forEach((card, index: number) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });

    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={sectionQfourUsRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/q4us.png" alt="q4us" className="object-contain" />
            </div>
            <div className="text-content">
              <h2>
                Q4Us turns every question into a fun adventure. It’s the perfect conversation game
                for evenings with friends, moments as a couple, or even to strengthen family bonds
                on any occasion!
              </h2>
              <p className="text-white-50 md:text-xl">React native, Expo & Tailwind </p>
            </div>
          </div>
          <div ref={sectionHealthLinkRef} className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/healthlink.png" alt="healthlink" />
              </div>
              <h2>A healthcare patient management application</h2>
            </div>
            <div ref={sectionRideWaveRef} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/ridewave.png" alt="ridewave" />
              </div>
              <h2>Uber clone</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
