import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Lê o token salvo nos cookies
  const token = req.cookies.get("token")?.value;

  // 1. Protege todas as rotas que começam com /dashboard
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    // Se não estiver logado (sem token), redireciona para /login
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // 2. Evita que usuários logados acessem a página de login
  if (req.nextUrl.pathname === "/" && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Se nenhuma regra bloquear, segue normalmente
  return NextResponse.next();
}

// Define em quais rotas o middleware deve rodar
export const config = {
  matcher: [
    "/dashboard/:path*", // qualquer rota dentro de /dashboard
    "/", // página de login
  ],
};
