import RoleLayout from "../RoleLayout";

export default function StudentPage() {
  return (
    <RoleLayout allowedRole="STUDENT">
      <h1>Bem-vindo student</h1>
    </RoleLayout>
  );
}
