import { SkillType, ExperienceType, ProjectType, EducationType, SocialLinkType } from '../types';
import { Github, Linkedin, Code2, FileCode2, SquareCode } from 'lucide-react';

export const skills: SkillType[] = [
  { name: 'Magento 2 (Adobe Commerce)', percentage: 95 },
  { name: 'API Development (REST, GraphQL)', percentage: 90 },
  { name: 'Frontend (React, JavaScript)', percentage: 85 },
  { name: 'Backend (PHP, Laravel, CodeIgniter)', percentage: 90 },
  { name: 'DevOps (AWS, Docker)', percentage: 80 },
  { name: 'Agile & Scrum', percentage: 85 },
];

export const experiences: ExperienceType[] = [
  {
    position: 'Tech Lead | Magento Expert',
    company: 'Nesoft Technologies',
    period: 'Sep 2020 - Present',
    description: [
      'Led a team of developers in building custom Magento 2.4.x solutions from the ground up',
      'Delivered complex e-commerce projects for international clients like Perfecta BE and FJEwellery',
      'Implemented GraphQL APIs and conducted unit testing for the T-Mobile project',
      'Customized Magento core modules for World of Amrutanjan and Precious Imaginarium',
      'Led server setups and deployment automation using AWS, Docker, and Varnish',
      'Actively contributed to client communications and project management',
    ],
  },
  {
    position: 'Full Stack Developer',
    company: 'Seepossible Innovative Solutions LLP',
    period: 'May 2018 - Sep 2020',
    description: [
      'Developed e-commerce solutions using Magento 2 and PHP',
      'Managed third-party API integrations for payment gateways and shipping providers',
      'Worked on React and JavaScript for client-side customisation',
      'Led development for RAPID IMAGINARIUM project',
    ],
  },
  {
    position: 'Software Engineer',
    company: 'Bosleo PVT LTD',
    period: 'Mar 2017 - May 2018',
    description: [
      'Worked as a PHP developer with frameworks like CodeIgniter and Laravel',
      'Integrated AngularJS and Memcache to build efficient web applications',
    ],
  },
  {
    position: 'Software Engineer',
    company: 'Narola Infotech PVT LTD',
    period: 'Jan 2016 - Mar 2017',
    description: [
      'Developed applications using PHP frameworks like Laravel, CodeIgniter, and WordPress',
      'Integrated various APIs (Facebook, Twitter, Google Maps, Stripe) into web applications',
      'Gained extensive experience in Git, collaborating with global teams on high-profile client projects',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    title: 'App Builder (Adobe Commerce)',
    subtitle: 'Magento 2.4.7-P3',
    description: [
      'Developed GraphQL APIs, the Commerce Starter Kit, API Mesh, and Admin UI SDK',
      'Managed client communication and version control using Git',
    ],
    technologies: ['Magento 2.4.7', 'GraphQL', 'Adobe Commerce', 'API Development'],
  },
  {
    title: 'T-Mobile',
    subtitle: 'Magento 2.4.6, Adobe Commerce',
    description: [
      'Developed GraphQL APIs, optimized server performance, and implemented unit tests',
      'Managed client communication and version control through Git',
    ],
    technologies: ['Magento 2.4.6', 'GraphQL', 'Unit Testing', 'Server Optimization'],
  },
  {
    title: 'Perfecta BE',
    subtitle: 'Magento 2.4.4, Furniture E-Commerce',
    link: 'http://perfecta.be/',
    description: [
      'Led the project from scratch for this multi-website and multi-language platform',
      'Customised 3D product management, vendor modules, and MSI inventory',
    ],
    technologies: ['Magento 2.4.4', 'Multi-website', 'ERP Integration', '3D Product Management'],
  },
  {
    title: 'World of Amrutanjan',
    subtitle: 'Magento 2.4.3',
    link: 'https://www.worldofamrutanjan.com/',
    description: [
      'Spearheaded back-end customisation, MSI optimisation, and customised shipping/payment methods',
      'Improved customer experience by adding zip-code-based product availability and OTP-based checkout verification',
    ],
    technologies: ['Magento 2.4.3', 'MSI Optimization', 'Custom Checkout', 'OTP Verification'],
  },
  {
    title: 'FJewellery',
    subtitle: 'Magento 2.4.5, Adobe Commerce',
    link: 'https://hattongardenjewellery.co.uk',
    description: [
      'Delivered end-to-end Magento development for a UK-based client',
      'Set up server, configured Varnish, and customized frontend',
    ],
    technologies: ['Magento 2.4.5', 'Adobe Commerce', 'Varnish', 'Server Configuration'],
  },
];

export const education: EducationType[] = [
  {
    degree: 'Master of Computer Application',
    school: 'Sardar Patel University',
    period: '2013 - 2016',
  },
  {
    degree: 'Bachelor of Computer Application',
    school: 'Veer Narmad South Gujarat University',
    period: '2010 - 2013',
  },
];

export const socialLinks: SocialLinkType[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/pratikhmehta',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pratikmehta-b11765129/',
    icon: 'Linkedin',
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/6129161/pratik-mehta',
    icon: 'Code2',
  },
  {
    name: 'Magento Stack Exchange',
    url: 'https://magento.stackexchange.com/users/68619/pratik-mehta',
    icon: 'FileCode2',
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/pratikhmehta/',
    icon: 'SquareCode',
  },
];

export const contactInfo = {
  phone: '+91 7990112606',
  email: 'pratik.mehta2713@gmail.com',
  website: 'pratikhmehta.github.io',
};

export const summary = [
  'I have a strong understanding of Magento\'s architecture and know how to create and manage products, categories, and customer accounts.',
  'I also have experience with Magento theming and front-end development using HTML, CSS, and JavaScript.',
  'Additionally, I am proficient in creating custom modules to extend Magento\'s functionality and integrating Magento with third-party payment gateways and shipping providers.',
  'I have knowledge of Magento\'s caching and performance optimization techniques.',
  'I led the development of a large-scale Magento e-commerce website for a retail company, resulting in increased online sales and improved customer experience.',
  'I also built a custom Magento extension for a client in the automotive industry, improving their inventory management process.',
  'Right now I am working on Magento 2.4.6 with Adobe Commerce.',
  'I demonstrate strong competency in designing, developing, and maintaining REST APIs.'
];

export const toolsAndCertifications = [
  'Visual Studio Code',
  'PHPStorm',
  'AWS Server',
  'Jira',
  'Scrum Foundation Certification (SFC)',
];