export type FormState<TFields extends string> = {
  success: boolean;
  message?: string;
  fieldErrors?: Partial<Record<TFields, string>>;
}; 