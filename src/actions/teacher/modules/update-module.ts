"use server";

import { FormState, UpdateModuleField } from "@/types/form";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function updateModuleAction(
  courseId: string,
  moduleId: string,
  _: FormState<UpdateModuleField>,
  formData: FormData,
): Promise<FormState<UpdateModuleField>> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Sessão expirada",
    };
  }

  const title = formData.get("title")?.toString();

  if (!title || title.trim().length < 3) {
    return {
      success: false,
      fieldErrors: {
        title: "O título precisa ter pelo menos 3 caracteres",
      },
    };
  }

  const response = await fetch(
    `${process.env.API_URL}/courses/${courseId}/modules/${moduleId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    },
  );

  if (!response.ok) {
    const error = await response.json();
    return {
      success: false,
      message: error.message ?? "Erro ao editar módulo",
    };
  }

  revalidatePath(`/teacher/courses/${courseId}/modules`);

  redirect(`/teacher/courses/${courseId}/modules`);
}
