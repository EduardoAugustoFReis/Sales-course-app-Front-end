// /teacher/layout.tsx
import { ReactNode } from "react";
import RoleLayout from "../RoleLayout";

type TeacherLayoutProps = {
  children: ReactNode; 
}

export default function TeacherLayout({ children }: TeacherLayoutProps) {
  return (
    <RoleLayout allowedRole="TEACHER">
      {children}
    </RoleLayout>
  );
}
