"use server"

import { prisma } from "@/lib/prisma"
import type { Project } from "@prisma/client"

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany()
    return { projects }
  } catch (error) {
    return { error: "Failed to fetch projects" }
  }
}

export async function getProject(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
    })
    return { project }
  } catch (error) {
    return { error: "Failed to fetch project" }
  }
}

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

