import { counterItems } from '@/constants.ts';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={`${item.label}-container-${index}`}
            className="bg-zinc-900 rounded-kg p-10 flex flex-col justify-center"
          >
            <div
              key={`${item.value}-ctn-${index}`}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp
                key={`${item.label}-countUp-${index}`}
                suffix={item.suffix}
                end={item.value}
              />
            </div>
            <div key={`${item.label}-${index}`} className="text-white-50 text-lg ">
              {' '}
              {item.label}{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
