import TitleHeader from '@/components/TitleHeader.tsx';
import { testimonials } from '@/constants.ts';
import GlowCard from '@/components/GlowCard.tsx';

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="What people say about me" subTitle="⭐️Feedback" />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard key={`${testimonial.name}-${index}`} card={testimonial} index={index}>
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div>
                  <img
                    src={testimonial.imgPath}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold mt-0.5">{testimonial.name}</p>
                </div>
              </a>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
