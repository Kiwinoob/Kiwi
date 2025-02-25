import prisma from "../lib/prisma"; // Adjust path based on your project structure

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "Portfolio Website",
        description: "A portfolio website built with Next.js, Prisma.",
        image: "",
        technologies: ["Next.js", "Prisma", "TailwindCSS"],
        link: "https://github.com/Kiwinoob/Kiwi",
        status: "LATEST",
      },
      {
        title: "Give4Need",
        description:
          "A donation platform for donating unwanted items to needy people.",
        image: "",
        technologies: ["Next.js", "Firebase", "TailwindCSS"],
        link: "https://github.com/Kiwinoob/Give4Need",
        status: "COMPLETED",
      },
      {
        title: "Belmacs Website Revamp",
        description: "Redesigned and developed Belmacs Pte Ltd's website.",
        image: "",
        technologies: ["React.js", "Firebase", "Google Analytics"],
        link: "https://www.belmacs.com.sg/",
        status: "OPEN SOURCE",
      },
    ],
  });

  console.log("✅ Data inserted successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
