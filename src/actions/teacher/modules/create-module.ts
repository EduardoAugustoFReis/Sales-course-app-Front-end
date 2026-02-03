"use server";

import { CreateModuleField, FormState } from "@/types/form";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function createModuleAction(
  courseId: string,
  _: FormState<CreateModuleField>,
  formData: FormData,
): Promise<FormState<CreateModuleField>> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Sessão expirada",
    };
  }

  const title = formData.get("title")?.toString();

  if (!title) {
    return {
      success: false,
      fieldErrors: {
        title: "O título do módulo é obrigatório",
      },
    };
  }

  const response = await fetch(
    `${process.env.API_URL}/courses/${courseId}/modules`,
    {
      method: "POST",
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
      message: error.message ?? "Erro ao criar módulo",
    };
  }

  revalidatePath(`/teacher/courses/${courseId}/modules`);

  redirect(`/teacher/courses/${courseId}/modules`);
}
