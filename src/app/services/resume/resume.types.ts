export interface Resume {
  selectedTemplate: number;
  headings: Headings;
  basics: Basics;
  education: Education[];
  work: Work[];
  skills: Skill[];
  projects: Project[];
  awards: Award[];
  sections: string[];
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface Basics {
  email: string;
  phone: string;
  website: string;
  location: Location;
  name: string;
}

export interface Location {
  address: string;
}

export interface Education {
  location: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  institution: string;
}

export interface Headings {
  skills: string;
  projects: string;
  awards: string;
}

export interface Project {
  name: string;
  keywords: string[];
  url: string;
  description: string;
}

export interface Skill {
  name: string;
  level?: string;
  keywords: string[];
}

export interface Work {
  company: string;
  position: string;
  website?: string;
  highlights: string[];
  location: string;
  startDate: string;
  endDate: string;
}
