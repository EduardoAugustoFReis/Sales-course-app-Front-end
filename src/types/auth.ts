import { Role } from "./roles";

export type LoginResponse = {
  user: {
    email: string;
    role: Role;
  };
  token: string;
};
