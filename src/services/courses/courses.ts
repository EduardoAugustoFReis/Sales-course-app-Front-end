import { CourseDetail, PaginationCourse } from "@/types/courses";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL não definida");
}

export async function getCourses(): Promise<PaginationCourse> {
  const response = await fetch(`${API_URL}/courses`, {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Erro ao buscar cursos");

  return response.json();
}

export async function getCoursesById(courseId: string): Promise<CourseDetail> {
  const response = await fetch(`${API_URL}/courses/${courseId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.json();
    console.error(error);
    throw new Error("Erro ao buscar curso");
  }

  return response.json();
}

export async function getTeacherCourses(): Promise<PaginationCourse> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(`${API_URL}/courses/teacher-courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.json();
    console.error(error);
    throw new Error("Erro ao buscar cursos do professor");
  }

  return response.json();
}
