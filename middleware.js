import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // Allow /admin and /admin/login without token check
  if (pathname === "/admin" || pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect all other /admin/* routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/access-denied", req.url));
    }

    try {
      verify(token, process.env.JWT_SECRET);
      return NextResponse.next();
    } catch (err) {
      console.log("Token verification failed:", err);
      return NextResponse.redirect(new URL("/access-denied", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
