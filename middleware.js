const { i18nRouter } = require("next-i18n-router");
const i18nConfig = require("./i18nConfig");

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static.*\\..*|_next).*)",
};
