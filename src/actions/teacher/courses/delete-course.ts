"use server";

import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionStateProps = {
  success: boolean;
  message?: string;
};

export default async function deleteCourseAction(
  courseId: number,
  _: ActionStateProps,
): Promise<ActionStateProps> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return { success: false, message: "Sessão expirada" };
  }

  const user = await getCurrentUser();
  if (!user) {
    return { success: false, message: "Usuário não autenticado" };
  }

  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/courses/${courseId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    return {
      success: false,
      message: error.message ?? "Erro ao deletar curso",
    };
  }

  revalidatePath("/teacher/courses");
  redirect("/teacher/courses");
}
