import RoleLayout from "../RoleLayout";

export default function TeacherPage() {
  return (
    <RoleLayout allowedRole="TEACHER">
      <h1>Bem-vindo teacher</h1>
    </RoleLayout>
  );
}
