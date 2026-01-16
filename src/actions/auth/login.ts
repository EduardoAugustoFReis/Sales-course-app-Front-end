"use server";

import { LoginResponse } from "@/types/auth";
import { FormState, LoginFields } from "@/types/form";
import { Role } from "@/types/roles";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const roleRedirectMap: Record<Role, string> = {
  ADMIN: "/admin",
  TEACHER: "/teacher",
  STUDENT: "/student",
};

export async function loginAction(
  _: FormState<LoginFields>,
  formData: FormData
): Promise<FormState<LoginFields>> {
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  if (!email) {
    return {
      success: false,
      fieldErrors: {
        email: "E-mail é obrigatório",
      },
    };
  }

  if (!password) {
    return {
      success: false,
      fieldErrors: {
        password: "A senha é obrigatória",
      },
    };
  }

  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return {
      success: false,
      message: "E-mail ou senha inválidos",
    };
  }

  const data: LoginResponse = await response.json();

  const cookieStore = await cookies();
  cookieStore.set("token", data.token, {
    httpOnly: true, // cookie não pode ser acessado pelo navegador
    secure: true, // só enviado em conexões HTTPS
    sameSite: "strict", // Controla quando o cookie é enviado em requisições cross-site
    path: "/", // Define em quais rotas o cookie é válido
  });

  return redirect(roleRedirectMap[data.user.role] ?? "/");
}
