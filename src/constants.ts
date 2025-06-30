import type { ExperienceCard } from '@/types.ts';

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

export type Abilities = {
  imgPath: string;
  title: string;
  desc: string;
};

export const abilities: Abilities[] = [
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

export const experienceCards: ExperienceCard[] = [
  {
    review:
      'Igor brought sharp UI skills and a user-focused mindset to our Web3 gaming project. His work helped bridge Web2/Web3 expectations with a smooth experience.',
    imgPath: '/images/logos.comethio.png',
    logoPath: '/images/logos.comethio.png',
    title: 'Senior Frontend Engineer',
    date: 'Jan 2024 – Dec 2024',
    responsibilities: [
      'Built and optimized UI for a Web3 gaming platform in partnership with FDJ (Française des Jeux).',
      'Integrated blockchain logic into gameplay flows, balancing Web2 familiarity with Web3 mechanics.',
      'Led frontend improvements to onboarding and user interactions for non-crypto users.',
    ],
  },
  {
    review:
      "Igor's work across MetaMask, Linea, and multiple enterprise DApps has been outstanding. He combines technical depth with strategic thinking.",
    imgPath: '/images/logos/consensys.png',
    logoPath: '/images/logos/consensys.png',
    title: 'Fullstack Engineer',
    date: 'Aug 2021 – Jan 2024',
    responsibilities: [
      'Took some github issues on Metamask extension, integrated Ledger hardware wallets into MetaMask Mobile and led a Mastercard virtual card PoC.',
      'Worked on Linea (zkEVM rollup) and implemented Lens Protocol for a social DApp.',
      'Contributed to Covantis (hexagonal backend, graphical features) and CMA-CGM (port logistics app).',
    ],
  },
  {
    review:
      'Igor was instrumental in launching our NFT marketplace. He shipped fast, high-quality features and integrated with the NEAR SDK.',
    imgPath: '/images/logos/ff.png',
    logoPath: '/images/logos/ff.png',
    title: 'Frontend Engineer (Freelance)',
    date: 'Mar 2022 – Jan 2023',
    responsibilities: [
      'Built NFT detail views, homepage dynamics, and loyalty modules.',
      'Integrated NEAR SDK functions into marketplace flows.',
      'Contributed to a successful launch: $8M raised and 15,000 users onboarded.',
    ],
  },
  {
    review:
      'Igor helped improve our SmartVigie platform with strong frontend contributions and great autonomy.',
    imgPath: '/images/logos/ubiplace.png',
    logoPath: '/images/logos/ubiplace.png',
    title: 'Frontend Engineer (Freelance)',
    date: '2020 & 2021',
    responsibilities: [
      'Enhanced SmartVigie by implementing observation tracking features.',
      'Supported a smooth product release by improving UX interactions.',
      'Delivered on tight deadlines with minimal supervision.',
    ],
  },
  {
    review:
      'Igor was a pillar in our blockchain innovation team. He combined delivery, clarity, and vision across sectors from finance to energy.',
    imgPath: '/images/logos/acn.png',
    logoPath: '/images/logos/acn.png',
    title: 'Analyst / Blockchain SME',
    date: 'Jan 2016 – Aug 2021',
    responsibilities: [
      'Led Web3 platform builds for vehicle ownership and broker regulation.',
      'Developed PoCs for CBDC, energy sharing, health data, and connected insurance.',
      'Worked on VR/AR, chatbots, and IoT apps in cross-functional teams.',
    ],
  },
];
