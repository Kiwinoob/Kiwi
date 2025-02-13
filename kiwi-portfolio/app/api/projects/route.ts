import { getProjects, createProject } from "@/lib/actions"
import { NextResponse } from "next/server"

export async function GET() {
  const { projects, error } = await getProjects()
  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { project, error } = await createProject(body)
  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
  return NextResponse.json(project)
}

