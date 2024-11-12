import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req) {
  // Skip processing for Next.js internal files and API routes
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  // Enforce default locale
  const defaultLocale = "es"; // your desired default locale
  if (!req.nextUrl.locale || req.nextUrl.locale === "default") {
    return NextResponse.redirect(
      new URL(
        `/${defaultLocale}${req.nextUrl.pathname}${req.nextUrl.search}`,
        req.url
      )
    );
  }
}
