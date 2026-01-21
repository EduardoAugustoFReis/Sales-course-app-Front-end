"use server";

import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { FormState, UpdateAccountFields } from "@/types/form";
import { cookies } from "next/headers";

export default async function updateUserDataAction(
  _: FormState<UpdateAccountFields>,
  formdata: FormData,
): Promise<FormState<UpdateAccountFields>> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Sessão expirada. Faça login novamente.",
    };
  }

  const user = await getCurrentUser();

  if (!user) {
    return {
      success: false,
      message: "Usuário não autenticado.",
    };
  }

  const name = formdata.get("name")?.toString();
  const email = formdata.get("email")?.toString();
  const password = formdata.get("password")?.toString();

  if (!name && !email && !password) {
    return {
      success: false,
      message: "Informe ao menos um campo para atualizar.",
    };
  }

  const payload: {
    name?: string;
    email?: string;
    password?: string;
  } = {};

  if (name) payload.name = name;
  if (email) payload.email = email;

  if (password) {
    if (password.length < 6) {
      return {
        success: false,
        fieldErrors: {
          password: "A senha deve ter no mínimo 6 caracteres",
        },
      };
    }
    payload.password = password;
  }

  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/users/${user.id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return {
      success: false,
      message: "Erro ao atualizar dados do usuário",
    };
  }

  return { success: true };
}
