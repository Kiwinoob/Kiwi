"use server";

import { mockProjects } from "./prisma";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function getProjects() {
  try {
    // In a real application, this would fetch from the database
    // const projects = await prisma.project.findMany()
    const projects = mockProjects;
    return { projects };
  } catch (error) {
    return { error: "Failed to fetch projects" };
  }
}

export async function getProject(id: string) {
  try {
    // In a real application, this would fetch from the database
    // const project = await prisma.project.findUnique({ where: { id } })
    const project = mockProjects.find((p) => p.id === id);
    return { project };
  } catch (error) {
    return { error: "Failed to fetch project" };
  }
}

// Commented out database operations
/*
export async function createProject(project: Omit<Project, "id" | "createdAt" | "updatedAt">) {
  try {
    const newProject = await prisma.project.create({
      data: project,
    })
    return { project: newProject }
  } catch (error) {
    return { error: "Failed to create project" }
  }
}

export async function updateProject(id: string, project: Partial<Project>) {
  try {
    const updatedProject = await prisma.project.update({
      where: { id },
      data: project,
    })
    return { project: updatedProject }
  } catch (error) {
    return { error: "Failed to update project" }
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    })
    return { success: true }
  } catch (error) {
    return { error: "Failed to delete project" }
  }
}
*/
