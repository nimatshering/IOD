import { NextResponse } from "next/server";
import courses from "../../../../../data/courses.json";

export async function GET(req, { params }) {
  const id = params.id;

  const course = courses.find((course) => course.id === Number(id));
  console.log(courses);
  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }

  return NextResponse.json(course);
}
