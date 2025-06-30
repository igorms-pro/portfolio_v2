export type WordItem = {
  text: string;
  imgPath: string;
};

export const words: WordItem[] = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
];

export type CounterItem = {
  value: number;
  suffix: string;
  label: string;
};

export const counterItems: CounterItem[] = [
  { value: 9, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Satisfied Clients' },
  { value: 108, suffix: '+', label: 'Completed Projects' },
  { value: 85, suffix: '%', label: 'Client Retention Rate' },
];

export type NavLink = {
  name: string;
  link: string;
};

export const navLinks: NavLink[] = [
  { name: 'Work', link: '#work' },
  { name: 'Experience', link: '#experience' },
  { name: 'Skills', link: '#skills' },
  { name: 'Testimonials', link: '#testimonials' },
];

export const logoIconsList: { imgPath: string }[] = [
  { imgPath: '/images/logos/comethio.png' },
  { imgPath: '/images/logos/consensys.png' },
  { imgPath: '/images/logos/ff.png' },
  { imgPath: '/images/logos/ubiplace.png' },
  { imgPath: '/images/logos/acn.png' },
];

export type Skill = {
  imgPath: string;
  title: string;
  desc: string;
};

export const skills: Skill[] = [
  {
    imgPath: '/images/seo.png',
    title: 'Frontend Architecture',
    desc: 'Building robust, scalable, and performant interfaces with React, TypeScript, and modern frameworks.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Web3 & Blockchain Expertise',
    desc: 'Proven experience across Ethereum, Polygon, and NEAR — from MetaMask to NFT marketplaces and zk-rollups.',
  },
  {
    imgPath: '/images/time.png',
    title: 'Product & UX Focus',
    desc: 'Delivering smooth onboarding and intuitive UI, especially at the Web2/Web3 intersection.',
  },
];
