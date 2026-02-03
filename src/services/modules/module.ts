import { IModule, ModuleDetail } from "@/types/module";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL não definida");
}

export async function getTeacherModulesByCourse(
  courseId: string,
): Promise<IModule[]> {
  const token = (await cookies()).get("token")?.value;

  const response = await fetch(
    `${API_URL}/courses/${courseId}/modules/teacher`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const error = await response.json();

    if (response.status === 401) {
      throw new Error("Você não é o dono deste curso");
    }

    throw new Error(error.message ?? "Erro ao buscar módulos");
  }

  return response.json();
}

export async function getTeacherModulesById(
  courseId: string,
  moduleId: string,
): Promise<ModuleDetail> {
  const token = (await cookies()).get("token")?.value;

  const response = await fetch(
    `${API_URL}/courses/${courseId}/modules/teacher/${moduleId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message ?? "Erro ao buscar módulos");
  }

  return response.json();
}
