import UsersTableActions from "../UsersTableActions";

import { UserListDetail } from "@/types/user";

type UsersTableRowProps = {
  user: UserListDetail;
};

export default function UsersTableRow({ user }: UsersTableRowProps) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <span>{user.role}</span>
      </td>
      <td>
        <UsersTableActions user={user} />
      </td>
    </tr>
  );
}
