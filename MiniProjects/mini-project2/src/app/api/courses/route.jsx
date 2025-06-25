import { NextResponse } from "next/server";
import coursesData from "../../../../data/courses.json";

// get courses endpoint
export async function GET() {
  const data = await NextResponse.json(coursesData);
  console.log(data);
  return data;
}

// Add Courses endpoint
export async function POST(req) {
  try {
    const body = await req.json();
    // Basic validation
    if (!body.name || !body.tutor) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name or tutor" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newCourse = {
      id: coursesData.length + 1,
      ...body,
    };

    coursesData.push(newCourse);
    console.log(coursesData);
    return new Response(JSON.stringify(newCourse), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
