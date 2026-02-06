"use server";

import { FormState, UpdateLessonField } from "@/types/form";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function updateLessonAction(
  courseId: string,
  moduleId: string,
  lessonId: string,
  _: FormState<UpdateLessonField>,
  formData: FormData,
): Promise<FormState<UpdateLessonField>> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Sessão expirada",
    };
  }

  const payload: Partial<{
    title: string;
    videoUrl: string;
    duration: number;
  }> = {};

  const title = formData.get("title")?.toString().trim();
  const videoUrl = formData.get("videoUrl")?.toString().trim();
  const duration = Number(formData.get("duration"));

  if (title) {
    payload.title = title;
  }

  if (videoUrl) {
    payload.videoUrl = videoUrl;
  }

  if (duration) {
    payload.duration = duration;
  }

  if (Object.keys(payload).length === 0) {
    return {
      success: false,
      message: "Informe ao menos um campo para atualizar",
    };
  }

  const response = await fetch(
    `${process.env.API_URL}/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    const error = await response.json();
    return {
      success: false,
      message: error.message ?? "Erro ao editar lição",
    };
  }

  revalidatePath(`/teacher/courses/${courseId}/modules/${moduleId}/lessons`);

  redirect(`/teacher/courses/${courseId}/modules/${moduleId}/lessons`);
}
