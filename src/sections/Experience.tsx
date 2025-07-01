import TitleHeader from '@/components/TitleHeader';
import { experienceCards } from '@/constants';
import GlowCard from '@/components/GlowCard.tsx';
import type { ExperienceCard } from '@/types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExpTextPanel from '@/components/ExpTextPanel.tsx';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    if (import.meta.env.VITEST) return;
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: 'left left',
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: 'power2.inOut',
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: 'top 80%',
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to('.timeline', {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: 'bottom bottom',
      // Animate the timeline height over 1 second
      ease: 'power1.inOut',
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray<HTMLElement>('.expText').forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: 'power2.inOut',
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: 'top 60%',
        },
      });
    }, '<'); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Professional Work Experience" subTitle="My Career" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {experienceCards.map((card: ExperienceCard, index: number) => (
              <div key={`${card.title}-${index}`} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div className="mt-10">
                      <img src={card.imgPath} alt={card.title} className="w-80" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <ExpTextPanel card={card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
