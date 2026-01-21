import { Role } from "./roles";

export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export type UserListItem = {
  id: number;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
};

export type PaginatedUsers = {
  page: number;
  total: number;
  limit: number;
  totalPages: number;
  data: UserListDetail[];
};

export type UserListDetail = {
  id: number;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
  subscription?: {
    type: "FREE" | "PREMIUM";
    active: boolean;
  };
};
