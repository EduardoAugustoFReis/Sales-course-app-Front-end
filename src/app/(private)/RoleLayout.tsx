import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { Role } from "@/types/roles";
import { IUser } from "@/types/user";
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
  const user: IUser | null = await getCurrentUser();

  if (!user || user.role !== allowedRole) redirect("/");

  return (
    <>
      <main>{children}</main>
    </>
  );
}
