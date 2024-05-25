import { SocialMediaPlatform } from "@/app/constants/socials";

export interface PersonalData {
  download_url: string;
  summary: string;
  basics: Basics;
  work: Work[];
  projects: Project[];
  education: Education[];
  publications: Publication[];
}

export interface Basics {
  name: string;
  profile_img: string;
  email: string;
  current_location: string;
  phone: string;
  socials: {
    [key in SocialMediaPlatform]: string;
  };
}

export interface Education {
  study_type: string;
  institute: string;
  start_date: string;
  end_date: string;
  location: string;
  gpa: number;
  total_gpa: number;
}

export interface Project {
  name: string;
  url: string;
  description: string;
  tech_used: string[];
}

export interface Publication {
  topic: string;
  description: string;
  publisher: string;
  published_on: string;
  url: string;
}

export interface Work {
  company: string;
  position: string;
  website: string;
  description: string;
  highlights: string[];
  tech_used: string[];
  location: string;
  start_date: string;
  end_date: string;
}
