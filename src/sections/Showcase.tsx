import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionMintlayerRef = useRef<HTMLDivElement | null>(null);
  const sectionQfourUsRef = useRef<HTMLDivElement | null>(null);
  const sectionHealthLinkRef = useRef<HTMLDivElement | null>(null);
  const sectionRideWaveRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (import.meta.env.VITEST) return;
    const projectsCards = [
      sectionMintlayerRef.current,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div ref={sectionMintlayerRef} className="project-card">
            <div className="image-wrapper mb-6">
              <img src="/images/mintlayer.png" alt="mintlayer" className="object-contain w-full h-64" />
            </div>
            <div className="text-content">
              <h2>Mintlayer - NFT minting dApp</h2>
              <p className="text-white-50 md:text-xl mb-4">
                A React/TypeScript application for viewing and minting ERC1155 NFTs 
                on Base Sepolia testnet with wallet connection and transaction handling.
              </p>
              <p className="text-white-50 md:text-lg mb-4">
                <strong>Tech Stack:</strong> React, TypeScript, Wagmi/Viem, TanStack Query & Tailwind CSS
              </p>
              <div className="flex gap-3 mt-4">
                <a 
                  href="https://mintlayer-nft-dapp.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
                <a 
                  href="https://github.com/igorms-pro/mintlayer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <img src="/images/socials/github_light.svg" alt="GitHub" className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div ref={sectionQfourUsRef} className="project-card">
            <div className="image-wrapper mb-6">
              <img src="/images/q4us.png" alt="q4us" className="object-contain w-full h-64" />
            </div>
            <div className="text-content">
              <h2>Q4Us - Conversation Game</h2>
              <p className="text-white-50 md:text-xl mb-4">
                Turns every question into a fun adventure. It's the perfect conversation game
                for evenings with friends, moments as a couple, or even to strengthen family bonds
                on any occasion!
              </p>
              <p className="text-white-50 md:text-lg mb-4">
                <strong>Tech Stack:</strong> React Native, Expo & Tailwind CSS
              </p>
            </div>
          </div>

          <div ref={sectionHealthLinkRef} className="project-card">
            <div className="image-wrapper mb-6 bg-[#ffefdb]">
              <img src="/images/healthlink.png" alt="healthlink" className="object-contain w-full h-64" />
            </div>
            <div className="text-content">
              <h2>HealthLink - Patient Management</h2>
              <p className="text-white-50 md:text-xl mb-4">
                A comprehensive healthcare patient management application designed to streamline
                medical workflows and improve patient care coordination.
              </p>
              <p className="text-white-50 md:text-lg mb-4">
                <strong>Tech Stack:</strong> React, TypeScript, Node.js & Tailwind CSS
              </p>
              <div className="flex gap-3 mt-4">
                <a 
                  href="https://healthlink-aqnn5m9ly-igormspros-projects.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
                <a 
                  href="https://github.com/igorms-pro/healthlink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <img src="/images/socials/github_light.svg" alt="GitHub" className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div ref={sectionRideWaveRef} className="project-card">
            <div className="image-wrapper mb-6 bg-[#ffe7eb]">
              <img src="/images/ridewave.png" alt="ridewave" className="object-contain w-full h-64" />
            </div>
            <div className="text-content">
              <h2>RideWave - Uber Clone</h2>
              <p className="text-white-50 md:text-xl mb-4">
                A ride-sharing application clone with real-time location tracking, driver matching,
                and payment integration for seamless transportation services.
              </p>
              <p className="text-white-50 md:text-lg mb-4">
                <strong>Tech Stack:</strong> React Native, Firebase, Google Maps API & Stripe
              </p>
              <div className="flex gap-3 mt-4">
                <a 
                  href="https://github.com/igorms-pro/ridewave" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <img src="/images/socials/github_light.svg" alt="GitHub" className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
