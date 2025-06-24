import { words } from '../constants.ts';
import Button from '../components/Button.tsx';

export const Header = () => {
  return (
    <header
      data-testid="header"
      className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5"
    >
      <div className="flex flex-col gap-7">
        <div className="hero-text" data-testid="hero-text">
          <h1 data-testid="heading-main">
            Shapping
            <span className="slide">
              <span className="wrapper">
                {words.map((word, index) => (
                  <span
                    key={`${word.text}-${index}`}
                    data-testid={`word-${word.text}-${index}`}
                    className="flex items-center md:gap-3 gap-1 pb-2"
                  >
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                    />
                    <span>{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <h1 data-testid="heading-projects"> into Real Projects</h1>
          <h1 data-testid="heading-results"> that Deliver Results</h1>
        </div>
        <p
          data-testid="intro-paragraph"
          className="text-white-50 md:text-xl relative z-10 pointer-events-noe"
        >
          Hi, I am Igor, a Software Developer based in France
        </p>
        <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my Work" />
      </div>
    </header>
  );
};
