import { NextResponse } from "next/server";
import { SEED_ITEMS } from "@/lib/content";

// In-memory store for now. Swap for a database in production.
let items = [...SEED_ITEMS];

export async function GET() {
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const body = await request.json();
  const item = {
    id: `c${Date.now()}`,
    stage: "idea" as const,
    owner: "Gareth",
    ...body,
  };
  items = [item, ...items];
  return NextResponse.json(item, { status: 201 });
}
