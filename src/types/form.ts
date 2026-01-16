export type FormState<TFields extends string> = {
  success: boolean;
  message?: string;
  fieldErrors?: Partial<Record<TFields, string>>;
};

export type LoginFields = "email" | "password";

export type SignupFields = "name" | "email" | "password";
