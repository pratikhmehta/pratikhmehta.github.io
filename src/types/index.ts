export interface SkillType {
  name: string;
  percentage: number;
}

export interface ExperienceType {
  position: string;
  company: string;
  period: string;
  description: string[];
}

export interface ProjectType {
  title: string;
  subtitle: string;
  description: string[];
  link?: string;
  technologies: string[];
}

export interface EducationType {
  degree: string;
  school: string;
  period: string;
}

export interface SocialLinkType {
  name: string;
  url: string;
  icon: string;
}