import { logoIconsList } from '@/constants.ts';

type LogoIconProps = {
  icon: {
    imgPath: string;
    name?: string;
  };
};

const LogoIcon = ({ icon }: LogoIconProps) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};
const LogoSection = () => {
  return (
    <div className="md:my-20 my-20 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`1-${index}`} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`2-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LogoSection;
