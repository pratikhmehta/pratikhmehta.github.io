export interface SkillGroupType {
  category: string;
  items: string[];
}

export interface ExperienceType {
  position: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  metrics?: string[];
  highlight?: boolean;
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

export interface CertificationType {
  name: string;
  issuer: string;
  year: string;
  status: 'Completed' | 'In Progress';
  details: string;
  link?: string;
}

export interface SocialLinkType {
  name: string;
  url: string;
  icon: string;
}
