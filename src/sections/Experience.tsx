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
                    <div className="mt-10">
                      <img src={card.imgPath} alt={card.title} className="w-80" />
                    </div>
                  </ExpGlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt={card.title} />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl"> {card.title}</h1>
                        <p className="my-5 text-white-50"> 📅 {card.date}</p>
                        <p className="text-[#839cb5] italic"> Responsabilities</p>
                        <ul className="list-disc ms-5 text-white-50">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
