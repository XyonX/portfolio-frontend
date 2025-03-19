import { NextResponse } from "next/server";
// import { verify } from "jsonwebtoken";
import { jwtVerify } from "jose"; // Changed import

export async function middleware(req) {
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
    console.log("Tokn Presnet:", token);

    try {
      // verify(token, process.env.JWT_SECRET);
      await jwtVerify(
        // Changed verification
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
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
  runtime: "nodejs",
  unstable_allowDynamic: [
    // Allow any dynamic dependencies (safety net)
    "/node_modules/jsonwebtoken/**",
  ],
};
