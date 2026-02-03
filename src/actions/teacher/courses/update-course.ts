"use server";

import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { FormState, UpdateCourseFields } from "@/types/form";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type UpdateCoursePayload = {
  title?: string;
  price?: number;
  description?: string;
  imageUrl?: string;
  status?: "DRAFT" | "PUBLISHED";
};

export default async function updateCourseAction(
  courseId: string,
  _: FormState<UpdateCourseFields>,
  formData: FormData,
): Promise<FormState<UpdateCourseFields>> {
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
      message: "Usuário não autenticado",
    };
  }

  const title = formData.get("title")?.toString().trim();
  const price = Number(formData.get("price")?.toString().trim());
  const description = formData.get("description")?.toString().trim();
  const imageUrl = formData.get("imageUrl")?.toString().trim();
  const status = formData.get("status")?.toString().trim();

  const payload: UpdateCoursePayload = {};

  if (price !== undefined && (isNaN(price) || price <= 0)) {
    return {
      success: false,
      fieldErrors: {
        price: "Informe um preço válido",
      },
    };
  }

  if (title) payload.title = title;
  if (!isNaN(price) && price > 0) payload.price = price;
  if (description) payload.description = description;
  if (imageUrl) payload.imageUrl = imageUrl;
  if (status === "DRAFT" || status === "PUBLISHED") {
    payload.status = status;
  }

  if (Object.keys(payload).length === 0) {
    return {
      success: false,
      message: "Nenhuma alteração foi realizada",
    };
  }

  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/courses/${courseId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    return {
      success: false,
      message: error.message ?? "Erro ao editar curso",
    };
  }

  revalidatePath(`/teacher/courses/${courseId}`);
  revalidatePath("/teacher/courses");

  redirect(`/teacher/courses/${courseId}`);
  
  return { success: true };
}
