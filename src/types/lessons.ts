export type ILesson = {
  id: string;
  title: string;
  videoUrl: string;
  duration: number;
  position: number;
};

export type PaginatedResponseLesson = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: ILesson[];
};
