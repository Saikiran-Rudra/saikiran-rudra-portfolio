import type {
  PersonalInfo,
  NavLink,
  SkillCategory,
  Experience,
  Project,
  Certification,
  Achievement,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Saikiran Rudra",
  roles: ["Full-Stack Developer", "AI Engineer", "React & Next.js Developer"],
  tagline: "Crafting scalable web applications and AI-driven solutions.",
  objective:
    "Full-Stack Developer with 6 months of internship experience in React.js, Next.js, Node.js, and MongoDB, passionate about building scalable web applications and AI-driven solutions. Transitioning into AI Engineering.",
  bio: [
    "I'm a Computer Engineering graduate and Full-Stack Developer with experience building scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.",
    "With 6 months of internship experience and multiple real-world projects — including ERP/Billing SaaS and AI-powered platforms — I have worked across frontend development, backend APIs, database integration, authentication, deployment, and AI integrations.",
    "I am passionate about building impactful products and continuously expanding my expertise in AI Engineering, LLM integrations, RAG systems, AI agents, and workflow automation.",
  ],
  location: "Surat, Gujarat — Open to Remote & Relocation",
  email: "rudrasaikiran66@gmail.com",
  linkedin: "https://www.linkedin.com/in/saikiran-rudra/",
  github: "https://github.com/Saikiran-Rudra",
  portfolio: "https://saikiran-rudra-portfolio.vercel.app/",
  resumeUrl: "https://drive.google.com/file/d/1sAbzbkolG2lMEQhFF7HKdEyEPFMCHnOi/view?usp=sharing",
};

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Automation",
    icon: "FaBrain",
    skills: [
      "LLM APIs",
      "AI Agents",
      "Prompt Engineering",
      "OCR",
      "n8n",
      "Docker",
      "RAG (Learning)",
    ],
  },
  {
    category: "Frontend",
    icon: "FaReact",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: "FaServer",
    skills: ["Node.js", "Express.js", "REST APIs", "Mongoose", "Zod"],
  },
  {
    category: "Database & Tools",
    icon: "FaDatabase",
    skills: [
      "MongoDB",
      "Firebase",
      "Git",
      "GitHub",
      "Vercel",
      "Zustand",
      "React Query",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "TechSonance InfoTech LLP",
    role: "Software Engineer Intern",
    period: "Dec 2025 – Jun 2026",
    location: "Surat, Gujarat",
    type: "On-site",
    bullets: [
      "Built GST/ERP Billing SaaS using Next.js, Node.js, Express, and MongoDB",
      "Developed WhatsApp bot for sales automation",
      "Built OCR pipeline for invoice data extraction and ERP auto-fill",
      "Managed state with Zustand & React Query; UI with Tailwind CSS",
      "Integrated AI/ML automation workflows",
      "Enforced schema validation with Zod + Mongoose",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "GST/ERP Billing SaaS — Hisaab Kitaab",
    description:
      "Cloud-based ERP covering GST invoicing, inventory, and accounting with a WhatsApp bot for sales automation and an OCR pipeline for invoice data extraction and ERP auto-fill. Built during internship at TechSonance InfoTech LLP.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Zustand", "Tailwind CSS"],
    liveUrl: "https://hisaabkitaab.techsonance.co.in/",
    githubUrl: null,
    nda: true,
    image: "/projects/hisaab.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "💰",
  },
  {
    title: "Skill-2-Career AI",
    description:
      "AI-powered career platform with resume review, mock interviews, real-time job insights, and scholarship eligibility checks — built solo from UI to deployment using the Gemini API.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Gemini API"],
    liveUrl: "https://skill-2-career-ai.vercel.app/",
    githubUrl: "https://github.com/Saikiran-Rudra/Skill-2-Career-AI",
    nda: false,
    image: null,
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "🤖",
  },
  {
    title: "Alumni Connect Portal",
    description:
      "Platform connecting students and alumni for mentorship, networking, and opportunities. Won 1st Rank at SIH 2025 Internal Hackathon. Developed as sole frontend developer.",
    tags: ["React.js", "Vite", "Tailwind CSS"],
    liveUrl: "https://alumni-portal-mvp.netlify.app/",
    githubUrl: "https://github.com/Saikiran-Rudra/Alumni-Portal",
    nda: false,
    image: null,
    gradient: "from-orange-500/20 to-yellow-500/20",
    icon: "🎓",
  },
];

export const certifications: Certification[] = [
  {
    title: "Introduction to Agentic AI",
    issuer: "Anthropic",
    year: "2026",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Cognitive Class",
    year: "2025",
  },
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    year: "2025",
  },
  {
    title: "SAP Code Unnati",
    issuer: "Edunet Foundation",
    year: "2025",
  },
];

export const achievements: Achievement[] = [
  {
    icon: "Trophy",
    title: "1st Rank — SIH 2025 Internal Hackathon",
    description:
      "Won first place at the Smart India Hackathon 2025 internal round with the Alumni Connect Portal.",
  },
  {
    icon: "Medal",
    title: "3rd Place — State Level IoT Design Challenge",
    description:
      "Secured third place at a state-level competition for an IoT fleet management dashboard design.",
  },
  {
    icon: "Users",
    title: "Founder & Co-Leader — Student Developer Club, BMU",
    description:
      "Founded and led the developer club, driving a community of student engineers.",
  },
  {
    icon: "BadgeCheck",
    title: "Selected — McKinsey Forward Program",
    description:
      "Competitively selected for McKinsey's global forward program for emerging leaders.",
  },
];
