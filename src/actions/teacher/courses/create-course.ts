"use server";

import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { CreateCourseFields, FormState } from "@/types/form";
import { cookies } from "next/headers";

export default async function createCourseAction(
  _: FormState<CreateCourseFields>,
  formData: FormData,
): Promise<FormState<CreateCourseFields>> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Sessão expirada. Faça login novamente",
    };
  }

  const user = await getCurrentUser();

  if (!user) {
    return {
      success: false,
      message: "Usuário não autenticado.",
    };
  }

  const title = formData.get("title")?.toString().trim();
  const price = Number(formData.get("price")?.toString());
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const status = formData.get("status")?.toString();

  if (!title) {
    return {
      success: false,
      fieldErrors: {
        title: "O título é obrigatório",
      },
    };
  }

  if (isNaN(price) || price <= 0) {
    return {
      success: false,
      fieldErrors: {
        price: "Informe um preço válido e maior que zero",
      },
    };
  }

  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/courses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({title, price, description, imageUrl, status}),
  });

  if (!response.ok) {
    const error = await response.json();
    return {
      success: false,
      message: error.message ?? "Erro ao criar curso",
    };
  }

  return { success: true };
}
