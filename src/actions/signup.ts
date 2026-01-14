"use server";

import { SignupFields } from "@/types/auth";
import { FormState } from "@/types/form";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signupAction(
  _: FormState<SignupFields>,
  formData: FormData
): Promise<FormState<SignupFields>> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  if (!name) {
    return {
      success: false,
      fieldErrors: {
        name: "O nome é obrigatório",
      },
    };
  }

  if (!email) {
    return {
      success: false,
      fieldErrors: {
        email: "O e-mail é obrigatório",
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

  console.log(API_URL)


  const createUserResponse = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!createUserResponse.ok) {
    return {
      success: false,
      message: "Erro ao criar usuário",
    };
  }

  const loginResponse = await fetch(`${API_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!loginResponse.ok) {
    return {
      success: false,
      message: "Erro ao logar usuário",
    };
  }

  const data = await loginResponse.json();

  const cookieStore = await cookies();
  cookieStore.set("token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  redirect("/dashboard");
}
