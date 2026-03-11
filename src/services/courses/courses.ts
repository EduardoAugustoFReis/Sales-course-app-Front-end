import {
  CourseDetail,
  CourseListItem,
  PaginationCourse,
  PublicCourseDetail,
} from "@/types/courses";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL não definida");
}

export async function getPublicCourse(
  page = 1,
  limit = 10,
): Promise<PaginationCourse> {
  const response = await fetch(
    `${API_URL}/courses/public?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar cursos públicos");
  }

  return response.json();
}

export async function getPublicCourseById(
  courseId: string,
): Promise<PublicCourseDetail> {
  const response = await fetch(`${API_URL}/courses/public/${courseId}`, {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Erro ao buscar curso");

  return response.json();
}

export async function getCourseContent(courseId: string): Promise<CourseDetail> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(`${API_URL}/courses/${courseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.json();
    console.error(error);
    throw new Error("Erro ao buscar curso");
  }

  return response.json() as Promise<CourseDetail>;
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

export async function getTeacherCoursesById(courseId: string): Promise<CourseListItem> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(`${API_URL}/courses/${courseId}/teacher`, {
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


