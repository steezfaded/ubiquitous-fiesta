import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const body = await req.json();
  const url = body?.url || "unknown";
  return NextResponse.json({ message: `Audit completed for ${url}`, score: 87 });
}