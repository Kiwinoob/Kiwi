import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const mockProjects = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A portfolio website built with Next.js, Prism. Showcase your projects and skills with a modern and responsive design.",
    image: "",
    technologies: ["Next.js", "Prisma", "TailwindCSS"],
    link: "https://github.com/Kiwinoob/Kiwi",
    status: "LATEST",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    title: "Give4Need",
    description:
      "A donation platform that allow donors to donate unwanted item for needy people. Built with Next.js and Firebase, it features 1 to 1 chat between donor and recipient and real time availability map to locate nearby donner.",
    image: "",
    technologies: ["Next.js", "Firebase", "tailwindCSS"],
    link: "https://github.com/Kiwinoob/Give4Need",
    status: "completed",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: "3",
    title: "Belmacs Website Revamp",
    description:
      "Re-designed and developed Belmacs Pte Ltd's website from scratch. it feature a new landing page and a system to manage their projects and view analytics of their website.",
    image: "",
    technologies: ["React.js", "Firebase", "Google Analytics"],
    link: "https://github.com/keehui/ai-blog-platform",
    status: "OPEN SOURCE",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
  },
];
