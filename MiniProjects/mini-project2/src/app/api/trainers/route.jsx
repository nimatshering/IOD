import { NextResponse } from "next/server";
import trainersData from "../../../../data/trainers.json";

export async function GET() {
  const data = await NextResponse.json(trainersData);
  return data;
}
