import {
  Languages,
  Code2,
  Database,
  LayoutTemplate,
  Network,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export const SKILLS = [
  {
    category: "Languages",
    icon: Languages,
    items: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Objective C",
      "C#",
      "Swift",
      "Python",
      "SQL",
    ],
  },
  {
    category: "Frameworks",
    icon: Code2,
    items: ["Angular", "ASP.net", "Ionic", "React.js", "Next.js"],
  },
  {
    category: "Backend & Databases",
    icon: Database,
    items: ["Node.js", "Express", "Firebase", "MongoDB", "MySQL"],
  },
];

export const HERO_TEXT = {
  name: "Kee Hui",
  title: "Full Stack Engineer & Creative Technologist",
  bio: "An aspiring Web Developer. Currently focused on creating secure and scalable web applications with cutting-edge technologies.",
};

export const SOCIALS = [
  {
    platform: "GitHub",
    url: "https://github.com/kiwinoob",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/kee-hui-lam/",
    icon: "Linkedin",
  },
  {
    platform: "Email",
    url: "mailto:kiwi1@live.com.sg",
    icon: "Mail",
  },
];

// Placeholder for projects type since we fetch dynamically,
// but useful if we ever switch to static or need mock data.
export const PROJECTS = [];
