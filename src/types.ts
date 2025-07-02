export type ExperienceCard = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

export type NavLink = {
  name: string;
  link: string;
};

export type WordItem = {
  text: string;
  imgPath: string;
};

export type CounterItem = {
  value: number;
  suffix: string;
  label: string;
};

export type Card = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

export type Abilities = {
  imgPath: string;
  title: string;
  desc: string;
};

export type TechStackImg = {
  name: string;
  imgPath: string;
};

export type TechStackIcon = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
};

export type Testimonial = {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
  linkedin: string;
};

export type SocialImage = {
  name: string;
  imgPath: string;
  link: string;
};
