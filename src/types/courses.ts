export type CourseStatus = "DRAFT" | "PUBLISHED";

export type CourseListItem = {
  id: number;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  price: number;
  status: CourseStatus;
  createdAt: string;
};

export type CourseDetail = {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  price: number;
  status: CourseStatus;
  createdAt: string;

  teacher: {
    id: number;
    name: string;
  };
};

export type PaginationCourse = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
  data: CourseListItem[];
};