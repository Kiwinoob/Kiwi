import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const project = await db.getProjectById(params.id)
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const project = await db.updateProject(params.id, body)
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const success = await db.deleteProject(params.id)
    if (!success) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 })
  }
}

