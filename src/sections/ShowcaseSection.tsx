const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper">
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
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/healthlink.png" alt="healthlink" />
              </div>
              <h2>A healthcare patient management application</h2>
            </div>
            <div className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/ridewave.png" alt="ridewave" />
              </div>
              <h2>Uber clone</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowcaseSection;
