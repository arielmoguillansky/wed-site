import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  const localeLang = req.cookies.get("NEXT_LOCALE")?.value || "es";

  if (localeLang || req.nextUrl.locale === "default") {
    return NextResponse.redirect(
      new URL(
        `/${localeLang}${req.nextUrl.pathname}${req.nextUrl.search}`,
        req.url
      )
    );
  }
}
