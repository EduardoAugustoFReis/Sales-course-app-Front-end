import { IUser } from "@/types/user";

export async function getCurrentUser(token: string): Promise<IUser | null> {
  const res = await fetch(`${process.env.API_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json() as Promise<IUser>;
}
