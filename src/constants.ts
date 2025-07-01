import type {
  Abilities,
  CounterItem,
  ExperienceCard,
  NavLink,
  TechStackIcon,
  TechStackImg,
  Testimonial,
  WordItem,
} from '@/types.ts';

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

export const counterItems: CounterItem[] = [
  { value: 9, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Satisfied Clients' },
  { value: 108, suffix: '+', label: 'Completed Projects' },
  { value: 85, suffix: '%', label: 'Client Retention Rate' },
];

export const navLinks: NavLink[] = [
  { name: 'Work', link: '#work' },
  { name: 'Experience', link: '#experience' },
  { name: 'Skills', link: '#skills' },
  { name: 'Testimonials', link: '#testimonials' },
];

export const companiesIconsList: { imgPath: string }[] = [
  { imgPath: '/images/companies/comethio.png' },
  { imgPath: '/images/companies/consensys.png' },
  { imgPath: '/images/companies/ff.png' },
  { imgPath: '/images/companies/ubiplace.png' },
  { imgPath: '/images/companies/acn.png' },
];

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
    imgPath: '/images/companies/comethio.png',
    logoPath: '/images/logos/comethio-logo.png',
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
    imgPath: '/images/companies/consensys.png',
    logoPath: '/images/logos/consensys-logo.png',
    title: 'Fullstack Engineer',
    date: 'Aug 2021 – Jan 2024',
    responsibilities: [
      'Fixed some github issues on Metamask extension, integrated Ledger hardware wallets into MetaMask Mobile and led a Mastercard virtual card PoC.',
      'Contributed to Covantis (hexagonal backend, graphical features) and CMA-CGM (port logistics app).',
      'Worked on Linea (zkEVM rollup) and implemented Lens Protocol for a social DApp.',
    ],
  },
  {
    review:
      'Igor was instrumental in launching our NFT marketplace. He shipped fast, high-quality features and integrated with the NEAR SDK.',
    imgPath: '/images/companies/ff.png',
    logoPath: '/images/logos/ff-logo.png',
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
    imgPath: '/images/companies/ubiplace.png',
    logoPath: '/images/logos/ubiplace-logo.png',
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
    imgPath: '/images/companies/acn.png',
    logoPath: '/images/logos/acn-logo.png',
    title: 'Analyst / Blockchain SME',
    date: 'Jan 2016 – Aug 2021',
    responsibilities: [
      'Led Web3 platform builds for vehicle ownership and broker regulation.',
      'Developed PoCs for CBDC, energy sharing, health data, and connected insurance.',
      'Worked on VR/AR, chatbots, and IoT apps in cross-functional teams.',
    ],
  },
];

export const techStackImgs: TechStackImg[] = [
  {
    name: 'Typescript',
    imgPath: '/images/stack/typescript.svg',
  },
  {
    name: 'Javascript',
    imgPath: '/images/stack/javascript.svg',
  },
  {
    name: 'Blockchain',
    imgPath: '/images/stack/blockchain-logo.svg',
  },
  {
    name: 'Web3',
    imgPath: '/images/stack/web3-logo.svg',
  },
  {
    name: 'Ethereum',
    imgPath: '/images/stack/ethereum-eth-logo.svg',
  },
  {
    name: 'Solana',
    imgPath: '/images/stack/solana-sol-logo.svg',
  },
  {
    name: 'Near',
    imgPath: '/images/stack/near-logo.svg',
  },
  {
    name: 'Wagmi',
    imgPath: '/images/stack/wagmi-logo.svg',
  },
  {
    name: 'Viem',
    imgPath: '/images/stack/viem-logo.svg',
  },
  {
    name: 'Shadcn',
    imgPath: '/images/stack/shadcn.svg',
  },
  {
    name: 'Tailwind',
    imgPath: '/images/stack/tailwind.svg',
  },
  {
    name: 'Atro',
    imgPath: '/images/stack/astro.svg',
  },
  {
    name: 'Git',
    imgPath: '/images/stack/git.svg',
  },
  {
    name: 'Nestjs',
    imgPath: '/images/stack/nestjs.svg',
  },
  {
    name: 'Nextjs',
    imgPath: '/images/stack/next.svg',
  },
  {
    name: 'Vuejs',
    imgPath: '/images/stack/vuejs.svg',
  },
  {
    name: 'Nuxt',
    imgPath: '/images/stack/nuxt.svg',
  },
];

export const techStackIcons: TechStackIcon[] = [
  {
    name: 'React',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Node',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Python ',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Vincent',
    mentions: '@vincent',
    review:
      'I can’t say enough good things about Igor. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: '/images/testimonials/vincent.jpeg',
    linkedin: 'https://fr.linkedin.com/in/vincent-le-gallic',
  },
  {
    name: 'Benoit',
    mentions: '@benoit',
    review:
      'Working with Igor was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: '/images/testimonials/benoit.webp',
    linkedin: 'https://fr.linkedin.com/in/mulocherb',
  },
  {
    name: 'Chris',
    mentions: '@chris',
    review:
      "Collaborating with Igor was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Igor's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Igor is the ideal partner.",
    imgPath: '/images/testimonials/chris.jpeg',
    linkedin: 'https://www.linkedin.com/in/hayesdata',
  },
  {
    name: 'Jean-Denis',
    mentions: '@jeandenis',
    review:
      'Igor was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: '/images/testimonials/jean.jpeg',
    linkedin: 'https://fr.linkedin.com/in/paris-jean-denis-46b65a77',
  },
  {
    name: 'Thomas',
    mentions: '@thomas',
    review:
      'Igor’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: '/images/testimonials/thomas.jpeg',
    linkedin: 'https://fr.linkedin.com/in/thomasmalnoury',
  },
];
