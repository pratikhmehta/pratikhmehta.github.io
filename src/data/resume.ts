import {
  SkillGroupType,
  ExperienceType,
  ProjectType,
  EducationType,
  CertificationType,
  SocialLinkType,
  PocType,
} from '../types';

export const skills: SkillGroupType[] = [
  {
    category: 'eCommerce',
    items: [
      'Magento 2 / Adobe Commerce (2.4.3–2.4.8)',
      'App Builder',
      'API Mesh',
      'Admin UI SDK',
      'Commerce Starter Kit',
      'OpenSearch',
      'PWA Studio',
      'Multi-store',
      'Adobe Experience Cloud',
    ],
  },
  {
    category: 'AI & Agents',
    items: [
      'Custom MCP Servers (Lumen/Magento)',
      'RAG Pipelines',
      'Agentic Workflows',
      'Sub-agent Orchestration',
      'Prompt Engineering',
      'LLM Integration (Claude, OpenAI)',
    ],
  },
  {
    category: 'Backend',
    items: [
      'PHP',
      'Laravel',
      'CodeIgniter',
      'Node.js',
      'Nest.js',
      'GraphQL',
      'REST API',
      'RabbitMQ',
      'ERP Integration',
      'AVALARA',
      'System Design',
    ],
  },
  {
    category: 'Frontend / Mobile',
    items: ['ReactJS', 'KnockoutJS', 'jQuery', 'HTML5', 'CSS3', 'Firebase Push Notifications'],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Redis',
      'Varnish',
      'CI/CD (GitHub Actions)',
      'Git',
      'Terraform',
      'OpenSearch',
      'Elasticsearch',
      'API Gateway',
    ],
  },
  {
    category: 'Testing & Performance',
    items: [
      'Unit Testing',
      'Load Testing',
      'UAT',
      'Caching Strategy',
      'Performance Profiling',
      'Security Hardening',
      'API Monitoring',
    ],
  },
];

export const experiences: ExperienceType[] = [
  {
    position: 'Technical Lead | Adobe Commerce Expert',
    company: 'NeoSOFT Technologies (CMMi Level 5)',
    period: 'Sep 2020 - Present',
    location: 'Pune, India',
    highlight: true,
    metrics: ['72 stores', '9,000+ SKUs', '99.9% ERP accuracy'],
    description: [
      "Minii Hypermarket (Tech Lead, 2024–Present): Developed a mobile application and REST/GraphQL APIs on Magento 2.4.8-p3 for Mongolia's national retail chain — 72 stores, 9,000+ SKUs, bilingual experience (Mongolian + English); engineered event-driven ERP sync via RabbitMQ and a React Native picker app, achieving 99.9% ERP–Magento data accuracy across 3 phases.",
      'NASM & T-Mobile (2021–2022): Delivered headless storefronts using API Mesh, App Builder AIO actions, and Commerce Starter Kit GraphQL APIs; built real-time bidirectional ERP sync and unit-test suites; deployed across US and European markets on Adobe Commerce 2.4.6.',
      'Built a production Lumen-based MCP server exposing Magento data to AI agents; integrated Claude Code CLI, GitHub, Postman, and Figma MCP into agentic dev workflows — reducing manual development effort by 30% and cutting sprint delivery time by 20% across a team of 8+ developers.',
      'Led Agile sprint planning, architecture reviews, and cross-timezone delivery for teams of 8+ developers across 3 time zones; mentored 5+ engineers and drove AI-augmented development adoption across all active projects.',
    ],
  },
  {
    position: 'Full Stack Developer',
    company: 'Seepossible Innovative Solutions LLP',
    period: 'May 2018 - Sep 2020',
    location: 'Surat, India',
    description: [
      'Built full-stack eCommerce solutions (Magento 2, PHP, ReactJS) with payment gateways, shipping APIs, and real-time ERP integrations; API and caching optimizations improved storefront speed by 30% across 6+ client projects.',
      'Developed reusable React component libraries; owned requirements gathering, sprint tracking, and post-deployment support; reduced post-release defects by 40% through structured UAT processes.',
    ],
  },
  {
    position: 'Software Engineer',
    company: 'BosLeo Pvt. Ltd. · Narola Infotech Pvt. Ltd',
    period: 'Jan 2016 - May 2018',
    location: 'Valsad, India',
    description: [
      'Delivered 10+ PHP/Laravel/CodeIgniter applications; improved data retrieval performance by 25% via AngularJS and Memcache optimization; integrated Facebook, Google Maps, Stripe, and Twitter APIs across 8+ projects.',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    title: 'Minii Hypermarket',
    subtitle: 'Mobile App & API on Magento 2.4.8-p3 · Mongolia National Retail Chain',
    description: [
      'Developed a mobile application and REST/GraphQL APIs on Magento 2 for a bilingual (Mongolian + English) national retail chain — 72 stores, 9,000+ SKUs',
      'Engineered event-driven ERP sync via RabbitMQ and a companion React Native picker app, achieving 99.9% ERP–Magento data accuracy across 3 rollout phases',
    ],
    technologies: ['Magento 2.4.8', 'Mobile App', 'REST/GraphQL API', 'RabbitMQ', 'React Native'],
  },
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
    link: 'https://www.t-mobile.com/',
    description: [
      'Delivered headless storefronts using API Mesh, App Builder AIO actions, and Commerce Starter Kit GraphQL APIs, deployed across US and European markets',
      'Built real-time bidirectional ERP sync and unit-test suites; optimized server performance',
    ],
    technologies: ['Magento 2.4.6', 'API Mesh', 'GraphQL', 'Unit Testing'],
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

export const pocs: PocType[] = [
  {
    title: 'Wealto',
    tagline: 'Personal Wealth OS',
    description:
      'A unified personal finance platform that consolidates stocks, mutual funds, bank accounts, SIPs, loans, and insurance into one encrypted vault, with real-time market data sync and built-in SIP, EMI, goal, and retirement calculators.',
    url: 'https://wealto.up.railway.app/',
    status: 'Live',
    technologies: ['Full-Stack Web App', 'Real-Time Data Sync', 'Financial Calculators', 'Encrypted Vault'],
  },
  {
    title: 'KidSpark',
    tagline: 'Learning World — PWA Game for Kids',
    description:
      'A progressive web app offering age-matched educational games across five groups from Toddler to Adult, pairing playful design with cognitive-development-appropriate challenges.',
    url: 'https://kid-spark--pratikmehta2713.replit.app/',
    status: 'In Progress',
    technologies: ['PWA', 'React', 'Educational Games', 'Age-Adaptive UX'],
  },
];

export const education: EducationType[] = [
  {
    degree: 'Master of Computer Applications',
    school: 'G.H. Patel College of Engineering & Technology / Sardar Patel University',
    period: '2013 - 2016',
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'Veer Narmad South Gujarat University',
    period: '2010 - 2013',
  },
];

export const certifications: CertificationType[] = [
  {
    name: 'Claude Code 101',
    issuer: 'Anthropic',
    year: '2025',
    status: 'Completed',
    details: 'Agentic coding, sub-agents, MCP server development, token optimisation',
    link: 'https://verify.skilljar.com/c/3w964dbysbb7',
  },
  {
    name: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'SCRUMstudy',
    year: '2021',
    status: 'Completed',
    details: 'Agile methodology, sprint planning, backlog grooming, cross-team delivery',
    link: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=961594',
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
  phone: '+91-7990112606',
  email: 'pratik.mehta2713@gmail.com',
  website: 'pratikhmehta.github.io',
  location: 'Pune, Maharashtra, India',
  availability: 'Open to Remote / Relocation',
};

export const summary = [
  "Technical Lead with 10+ years of experience architecting enterprise eCommerce platforms across 15+ international projects, including Minii Hypermarket, NASM, T-Mobile, FJ Jewelry, Perfecta BE, and Amrutanjan.",
  'Adobe Commerce specialist delivering measurable performance gains through advanced system design, Redis/Varnish caching, and API engineering.',
  'Anthropic Claude Code 101 certified — actively shipping custom MCP servers, RAG pipelines, and agentic AI workflows in production.',
  'Proven cross-functional leader in Agile, cross-timezone, multi-million-dollar engagements, seeking senior Technical Lead or eCommerce Architect roles in platform engineering or AI-augmented development.',
];

export const achievements = [
  { value: '10+', label: 'Years of experience', context: 'Architecting enterprise eCommerce platforms' },
  { value: '15+', label: 'International projects', context: 'Across US, European, and Asian markets' },
  { value: '72', label: 'Stores', context: 'Mongolia national retail platform architected' },
  { value: '9,000+', label: 'SKUs', context: 'Bilingual multi-store catalog' },
  { value: '99.9%', label: 'ERP accuracy', context: 'Event-driven RabbitMQ sync across 3 phases' },
  { value: '30%', label: 'Less dev effort', context: 'Via MCP-server & agentic workflows' },
  { value: '20%', label: 'Faster delivery', context: 'Sprint cycle time reduction' },
  { value: '8+', label: 'Engineers led', context: 'Across 3 time zones' },
];
