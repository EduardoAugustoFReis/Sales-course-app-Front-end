import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  // Rotas públicas
  if (pathname === "/" || pathname.startsWith("/signup")) {
    return NextResponse.next();
  }

  // Qualquer rota privada precisa de token
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Define em quais rotas o middleware deve rodar
export const config = {
  matcher: ["/admin/:path*", "/teacher/:path*", "/student/:path*"],
};
