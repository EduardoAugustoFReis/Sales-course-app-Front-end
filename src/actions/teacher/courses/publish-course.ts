"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionStateProps = {
  success: boolean;
  message?: string;
};

export default async function PublishCourseAction(
  courseId: string,
  _: ActionStateProps,
  formData: FormData,
): Promise<ActionStateProps> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return { success: false, message: "Sessão expirada" };
  }

  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/courses/${courseId}/publish`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    return {
      success: false,
      message: error.message ?? `Erro ao publicar curso`,
    };
  }

  revalidatePath("/teacher/courses");
  redirect("/teacher/courses");
}
