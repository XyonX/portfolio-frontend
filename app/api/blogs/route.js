import { NextResponse } from "next/server";
import blogs from "../../../content/blogs.json";

export async function GET() {
  return NextResponse.json({
    data: blogs,
  });
}
