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
  roles: ["Full-Stack Developer & Product Builder", "Full-Stack Developer", "Product Builder"],
  tagline: "Crafting scalable web applications and AI-driven solutions.",
  objective:
    "Full-Stack Developer & Product Builder with hands-on experience building production-ready ERP SaaS, working directly with founders, and delivering end-to-end features from concept to deployment.",
  heroHighlightPoints: [
    "During my internship, I built a GST billing ERP from scratch — invoicing, inventory, and accounting — used by real businesses.",
    "I worked directly with founders on product decisions, customer demos, and feature planning — not just writing code.",
    "Looking for a Full-Stack role where I can own features end-to-end — from idea to deployment."
  ],
  bio: [
    "I built my foundation in React during my Computer Engineering degree, then joined a startup internship where I learned backend development, databases, and deployment by building real products from scratch.",
    "In 6 months I went from frontend-only to building a full-stack GST Billing ERP end-to-end — and alongside that, worked directly with founders on product decisions, customer demos, and feature planning.",
    "Now I'm expanding into AI-powered products — combining full-stack development with LLM integrations to build tools that are actually useful, not just technically interesting."
  ],
  location: "Surat, Gujarat — Open to Remote & Relocation",
  email: "rudrasaikiran66@gmail.com",
  linkedin: "https://www.linkedin.com/in/saikiran-rudra/",
  github: "https://github.com/Saikiran-Rudra",
  portfolio: "https://saikiran-rudra-portfolio.vercel.app/",
  resumeUrl: "https://drive.google.com/file/d/1slyE8pXCkELO_rareOgZioXvwM7xECL_/view?usp=sharing",
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
    category: "Frontend",
    icon: "FaReact",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    icon: "FaServer",
    skills: ["Node.js", "Express.js", "REST APIs", "Mongoose", "Zod"],
  },
  {
    category: "Database & Infrastructure",
    icon: "FaDatabase",
    skills: [
      "MongoDB",
      "Firebase",
      "Supabase",
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "React Query",
      "Zustand",
    ],
  },
  {
    category: "AI & Automation",
    icon: "FaBrain",
    skills: [
      "OpenAI APIs",
      "Prompt Engineering",
      "RAG Systems",
      "OCR",
      "n8n",
      "AI Workflows",
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
    image: "/projects/hero skill2carrer.jpg",
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
    image: "/projects/hero alumni.jpg",
    gradient: "from-orange-500/20 to-yellow-500/20",
    icon: "🎓",
  },

];

export const certifications: Certification[] = [
  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    year: "2026",
    image: "/cert-achivement/into to agent skills.jpg",
    url: "https://verify.skilljar.com/c/m58pv2ucqro3",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Cognitive Class",
    year: "2025",
    image: "/cert-achivement/outskill.jpg",
    url: null,
  },
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    year: "2025",
    image: "/cert-achivement/MCkinsey certi.jpg",
    url: "https://www.credly.com/badges/5e111785-0059-4ece-b8ab-c1cdd728e15b",
  },
  {
    title: "SAP Code Unnati",
    issuer: "Edunet Foundation",
    year: "2025",
    image: "/cert-achivement/edunet.jpg",
    url: "https://codeunnati.edunetfoundation.com/verify-certificate/CU25_24439",
  },
];

export const achievements: Achievement[] = [
  {
    icon: "GraduationCap",
    title: "Gold Medalist — Diploma Engineering",
    description: "Awarded Gold Medal for academic excellence throughout the diploma program.",
    proofUrl: "https://drive.google.com/file/d/1W22pFL56I03FMiAlhWAvWEi8ARHdnYjS/view?usp=sharing",
    proofLabel: "View Certificate",
  },
  {
    icon: "Trophy",
    title: "1st Rank — Smart India Hackathon Internal Round",
    description: "Won first place at the Smart India Hackathon 2025 internal round with the Alumni Connect Portal.",
    proofUrl: "https://drive.google.com/file/d/1xEcoiBkzgtfcjypDBXUHamz9B47oRTaQ/view?usp=sharing",
    proofLabel: "View Certificate",
  },
  {
    icon: "Award",
    title: "Runner-Up — Project Horizon",
    description: "Secured consolation prize in Project Horizon for 'Student CMS Portal', recognizing our innovative efforts and dedication.",
    proofUrl: "https://drive.google.com/file/d/16zACYqXYhQlKop7Nxj54oUFEWsLudGdx/view?usp=sharing",
    proofLabel: "View Certificate",
  },
  {
    icon: "Cpu",
    title: "State-Level IoT Design Challenge",
    description: "Secured 3rd position in the IoT Challenge for project 'Panchtatva', a smart irrigation system utilizing advanced sensor networks and data analytics to optimize agricultural water usage.",
    proofUrl: "https://drive.google.com/file/d/1oOFm1wr9IMYNRj16N8y2z_U9Ty2y9HJ5/view?usp=sharing",
    proofLabel: "View Certificate",
  }
];
