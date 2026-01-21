"use client";

import { useState } from "react";
import UsersTableRow from "../UsersTableRow";
import styles from "./styles.module.css";

import { UserListDetail } from "@/types/user";

type UsersTableProps = {
  users: UserListDetail[];
};

export function UsersTable({ users }: UsersTableProps) {
  const [filter, setFilter] = useState("");

  const filteredUsers = users.filter((user) =>
    user.email.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Buscar por e-mail"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.searchInput}
      />

      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan={4} className={styles.empty}>
                Nenhum usuário encontrado
              </td>
            </tr>
          ) : (
            filteredUsers.map((user) => (
              <UsersTableRow key={user.id} user={user} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
