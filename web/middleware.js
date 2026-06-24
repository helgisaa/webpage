import { NextResponse } from "next/server";

const defaultLanguage = "is";

export function middleware(request) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/"
};
