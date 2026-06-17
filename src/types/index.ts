export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // react-icons key
}

export interface PersonalInfo {
  name: string;
  roles: string[];
  tagline: string;
  objective: string;
  bio: string[];
  location: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
  resumeUrl: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  nda: boolean;
  image: string | null;
  gradient: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}
