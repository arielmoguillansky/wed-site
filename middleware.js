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

  const locale = req.cookies.get("NEXT_LOCALE")?.value || "es";

  if (req.nextUrl.locale === "default") {
    const locale = req.cookies.get("NEXT_LOCALE")?.value || "es";

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }
}
