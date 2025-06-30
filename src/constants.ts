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
