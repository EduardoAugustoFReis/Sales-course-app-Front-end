import { ILesson, PaginatedResponseLesson } from "@/types/lessons";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL não definida");
}

export async function getTeacherLessonsByModule(
  courseId: string,
  moduleId: string,
): Promise<PaginatedResponseLesson> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Sessão expirada");
  }

  const response = await fetch(
    `${API_URL}/courses/${courseId}/modules/${moduleId}/lessons`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message ?? "Erro ao buscar lições");
  }

  return response.json();
}

export async function getTeacherLessonsById(
  courseId: string,
  moduleId: string,
  lessonId: string,
): Promise<ILesson> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Sessão expirada");
  }

  const response = await fetch(
    `${API_URL}/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message ?? "Erro ao buscar lição");
  }

  return response.json();
}
