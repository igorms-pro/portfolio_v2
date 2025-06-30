import TitleHeader from '@/components/TitleHeader';
import { experienceCards } from '@/constants';
import ExpGlowCard from '@/components/ExpGlowCard';
import type { ExperienceCard } from '@/types';

const Experience = () => {
  return (
    <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Professional Work Experience" subTitle="My Career" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {experienceCards.map((card: ExperienceCard, index: number) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <ExpGlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </ExpGlowCard>
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
