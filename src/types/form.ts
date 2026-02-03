export type FormState<TFields extends string> = {
  success: boolean;
  message?: string;
  fieldErrors?: Partial<Record<TFields, string>>;
};

export type LoginFields = "email" | "password";

export type SignupFields = "name" | "email" | "password";

export type UpdateAccountFields = "name" | "email" | "password";

export type CreateCourseFields =
  | "title"
  | "price"
  | "imageUrl"
  | "description"
  | "status";

export type UpdateCourseFields =
  | "title"
  | "price"
  | "imageUrl"
  | "description"
  | "status";

export type CreateModuleField = "title" | "position";

export type UpdateModuleField = "title" | "position";