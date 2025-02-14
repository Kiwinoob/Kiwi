import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export const mockProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration. Features include user authentication, product management, and secure payments.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9YFduaLehXBahou4EskXtTlPd28vXl.png",
    technologies: ["Next.js", "Prisma", "Stripe"],
    github: "https://github.com/keehui/ecommerce",
    status: "LATEST",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A real-time task management application with team collaboration features. Built with React and Socket.io for real-time updates.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9YFduaLehXBahou4EskXtTlPd28vXl.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/keehui/task-manager",
    status: "OPEN SOURCE",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: "3",
    title: "AI-Powered Blog Platform",
    description:
      "An innovative blog platform leveraging AI for content suggestions and SEO optimization. Integrates with OpenAI's API for enhanced writing assistance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9YFduaLehXBahou4EskXtTlPd28vXl.png",
    technologies: ["Next.js", "OpenAI API", "TailwindCSS"],
    github: "https://github.com/keehui/ai-blog-platform",
    status: "OPEN SOURCE",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
  },
]

