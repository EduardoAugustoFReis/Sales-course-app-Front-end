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

  teacher: {
    id: number;
    name: string;
  };

  modules: {
    id: number;
    title: string;
    position: number;

    lessons: {
      id: number;
      title: string;
      position: number;
      duration: number;
      videoUrl: string;
    }[];
  }[];
};

export type PaginationCourse = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
  data: CourseListItem[];
};

export type PublicCourseDetail = {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  price: number;
  teacher: {
    name: string;
  };
  stats: {
    modules: number;
    lessons: number;
    duration: number;
  };
};
