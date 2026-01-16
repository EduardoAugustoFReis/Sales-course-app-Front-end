import PromoteToTeacher from "@/components/Forms/PromoteToTeacher";
import RoleLayout from "../RoleLayout";
import { getUsers } from "@/services/users/users";

export default async function AdminPage() {
  const { data: users } = await getUsers();
  return (
    <RoleLayout allowedRole="ADMIN">
      <h2>Usuários</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <div>
                <p>Nome: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Função: {user.role}</p>
              </div>

              {user.role === "STUDENT" && <PromoteToTeacher userId={user.id} />}
            </li>
          );
        })}
      </ul>
    </RoleLayout>
  );
}
