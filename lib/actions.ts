"use server";

import prisma from "@/lib/prisma";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return { projects };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return { error: "Failed to fetch projects" };
  }
}
