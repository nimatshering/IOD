// app/api/hero/route.ts
import { NextResponse } from "next/server";
import heroData from "../../../../data/hero.json"; // relative path from route.ts to data folder

export async function GET() {
  return NextResponse.json(heroData);
}
