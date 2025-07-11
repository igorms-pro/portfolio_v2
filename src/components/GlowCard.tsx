import { useRef, type MouseEvent, type ReactNode } from 'react';
type GlowCardProps<T extends { review: string }> = {
  card: T;
  index: number;
  children: ReactNode;
};

const GlowCard = <T extends { review: string }>({ card, index, children }: GlowCardProps<T>) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (i: number) => (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRefs.current[i];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    el.style.setProperty('--start', `${angle + 60}`);
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
