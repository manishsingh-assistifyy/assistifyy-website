import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assistifyy-logo") ||
    pathname.startsWith("/ogimage")
  ) {
    return NextResponse.next();
  }

  if (pathname === "/home") {
    return NextResponse.next();
  }

  // Redirect to /home with absolute URL
  const homeUrl = new URL("/home", request.url);
  return NextResponse.redirect(homeUrl);
}

export const config = {
  matcher: ["/:path*"],
};
