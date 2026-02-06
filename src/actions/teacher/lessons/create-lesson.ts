"use server";

import { CreateLessonField, FormState } from "@/types/form";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function createLessonAction(
  courseId: string,
  moduleId: string,
  _: FormState<CreateLessonField>,
  formData: FormData,
): Promise<FormState<CreateLessonField>> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Sessão expirada",
    };
  }

  const title = formData.get("title")?.toString().trim();
  const videoUrl = formData.get("videoUrl")?.toString().trim();
  const duration = Number(formData.get("duration"));

  if (!title) {
    return {
      success: false,
      fieldErrors: {
        title: "O título do módulo é obrigatório",
      },
    };
  }

  if (!videoUrl) {
    return {
      success: false,
      fieldErrors: { videoUrl: "URL do vídeo é obrigatória" },
    };
  }

  if (!duration || duration <= 0) {
    return {
      success: false,
      fieldErrors: { duration: "Duração inválida" },
    };
  }

  const response = await fetch(
    `${process.env.API_URL}/courses/${courseId}/modules/${moduleId}/lessons`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        videoUrl,
        duration,
      }),
    },
  );

  if (!response.ok) {
    const error = await response.json();
    return {
      success: false,
      message: error.message ?? "Erro ao criar lição",
    };
  }

  revalidatePath(`/teacher/courses/${courseId}/modules/${moduleId}/lessons`);

  redirect(`/teacher/courses/${courseId}/modules/${moduleId}/lessons`);
}
