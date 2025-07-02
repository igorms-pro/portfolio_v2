import { socialImgs } from '@/constants.ts';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="/resume/igorms_resume.pdf"
          download="igorms_resume"
          className="bg-transparent border dark:border-white border-gray-divide px-5 py-3 rounded-3xl transition-transform duration-300 hover:scale-105 sm:w-52 w-full"
        >
          Download my Resume
        </a>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a href={socialImg.link} key={index} className="icon" target="_blank">
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Igor MS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
