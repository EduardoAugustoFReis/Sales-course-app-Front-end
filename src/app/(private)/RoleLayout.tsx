import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { Role } from "@/types/roles";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type RoleLayoutProps = {
  children: ReactNode;
  allowedRole: Role;
};

export default async function RoleLayout({
  children,
  allowedRole,
}: RoleLayoutProps) {
  const token = (await cookies()).get("token")?.value;

  if (!token) redirect("/");

  const user: IUser | null = await getCurrentUser(token);

  if (!user || user.role !== allowedRole) redirect("/");

  return <>{children}</>;
}
