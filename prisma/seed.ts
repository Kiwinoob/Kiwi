import "dotenv/config";
import { PrismaClient } from "./generated/v7/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const seedData = [
    {
      title: "Letmecooked",
      description:
        "An AI-powered study app using Next.js, TypeScript, and Gemini AI to generate summaries, quizzes, flashcards, and study plans from PDF files and YouTube transcripts.",
      image:
        "https://napwpmlptnqgsqqyaiww.supabase.co/storage/v1/object/public/project-image/letmecooked.mp4",
      technologies: [
        "Next.js",
        "Firebase",
        "Stripe",
        "Gemini AI",
        "TailwindCSS",
      ],
      link: "https://letmecooked.vercel.app/",
      status: "LATEST",
    },
    {
      title: "Personal Portfolio Website",
      description: "My portfolio website built with Next.js, Prisma.",
      image:
        "https://napwpmlptnqgsqqyaiww.supabase.co/storage/v1/object/public/project-image/portfilo.mp4",
      technologies: ["Next.js", "Prisma", "TailwindCSS"],
      link: "https://github.com/Kiwinoob/Kiwi",
      status: "COMPLETED",
    },
    {
      title: "Give4Need",
      description:
        "A donation platform for donating unwanted items to needy people.",
      image:
        "https://napwpmlptnqgsqqyaiww.supabase.co/storage/v1/object/public/project-image//give4need.png",
      technologies: ["Next.js", "Firebase", "TailwindCSS"],
      link: "https://github.com/Kiwinoob/Give4Need",
      status: "COMPLETED",
    },
    {
      title: "Belmacs Website Revamp",
      description: "Redesigned and developed Belmacs Pte Ltd's website.",
      image:
        "https://napwpmlptnqgsqqyaiww.supabase.co/storage/v1/object/public/project-image//belmacs.mp4",
      technologies: ["React.js", "Firebase", "Google Analytics"],
      link: "https://www.belmacs.com.sg/",
      status: "COMPLETED",
    },
  ];

  // Idempotent seeding: insert if a project with the same link doesn't exist.
  for (const item of seedData) {
    const existing = await prisma.project.findFirst({
      where: { link: item.link },
    });
    if (!existing) {
      await prisma.project.create({ data: item });
    } else {
      await prisma.project.update({ where: { id: existing.id }, data: item });
    }
  }

  console.log("✅ Data inserted or updated successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
