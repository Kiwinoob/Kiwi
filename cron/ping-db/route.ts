import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Make sure this is always executed server-side and not cached
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    // Simple query to keep the database active
    const result = await prisma.$queryRaw`SELECT 1`;

    console.log("Database ping successful at", new Date().toISOString());

    return NextResponse.json({
      success: true,
      message: "Database pinged successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Database ping error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to ping database",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
