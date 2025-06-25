import { NextResponse } from "next/server";
import trainers from "../../../../../data/trainers.json";

export async function GET(req, { params }) {
  const id = params.id;

  const trainer = trainers.find((trainer) => trainer.id === Number(id));
  console.log(trainers);
  if (!trainer) {
    return NextResponse.json({ message: "Trainer not found" }, { status: 404 });
  }

  return NextResponse.json(trainer);
}
