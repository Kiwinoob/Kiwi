"use server";

import { prisma, mockProjects } from "@/lib/prisma";
import type { Project } from "@prisma/client";

export async function getProjects() {
  try {
    let projects: Project[];
    if (process.env.USE_MOCK_DATA === "true") {
      projects = mockProjects;
    } else {
      projects = await prisma.project.findMany();
    }
    return { projects };
  } catch (error) {
    return { error: "Failed to fetch projects" };
  }
}

export async function getProject(id: string) {
  try {
    let project: Project | null;
    if (process.env.USE_MOCK_DATA === "true") {
      project = mockProjects.find((p) => p.id === id) || null;
    } else {
      project = await prisma.project.findUnique({
        where: { id },
      });
    }
    return { project };
  } catch (error) {
    return { error: "Failed to fetch project" };
  }
}

export async function createProject(
  project: Omit<Project, "id" | "createdAt" | "updatedAt">
) {
  try {
    const newProject = await prisma.project.create({
      data: project,
    });
    return { project: newProject };
  } catch (error) {
    return { error: "Failed to create project" };
  }
}

export async function updateProject(id: string, project: Partial<Project>) {
  try {
    const updatedProject = await prisma.project.update({
      where: { id },
      data: project,
    });
    return { project: updatedProject };
  } catch (error) {
    return { error: "Failed to update project" };
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete project" };
  }
}
