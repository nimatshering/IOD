import { NextResponse } from "next/server";
import aboutData from "../../../../data/about.json"; // relative path from route.ts to data folder

export async function GET() {
  return NextResponse.json(aboutData);
}
