export type News = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  image_alt: string;
  image_desc: string;
  category: string;
  author: string;
  division: string;
  date: string;
  url: string;
  contents: string;
};

export type Event = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  image_alt: string;
  image_desc: string;
  category: string;
  host: string;
  division: string;
  url: string;
  date: string;
  time: string;
  venue: string;
  contents: string;
};

export type Donation = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  image_alt: string;
  image_desc: string;
  category: string;
  from: string;
  division: string;
  url: string;
  date: string;
  goals: number;
  current_goal: number;
  percent_goal: number;
  remaining: number;
  contents: string;
};
