import type { ExperienceCard } from '@/types';

type Props = {
  card: ExperienceCard;
};

const ExpTextPanel = ({ card }: Props) => {
  return (
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
          <h1 className="font-semibold text-3xl">{card.title}</h1>
          <p className="my-5 text-white-50">📅 {card.date}</p>
          <p className="text-[#839cb5] italic">Responsabilities</p>
          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
            {card.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-lg">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpTextPanel;
