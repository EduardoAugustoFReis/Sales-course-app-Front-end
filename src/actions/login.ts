"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Credenciais inválidas");
  }

  const data = await response.json();

  const cookieStore = await cookies();
  cookieStore.set("token", data.token, {
    httpOnly: true, // cookie não pode ser acessado pelo navegador
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  redirect("/dashboard"); // redireciona após login
}
