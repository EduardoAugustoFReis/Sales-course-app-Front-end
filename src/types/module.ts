import { CourseStatus } from "./courses";

export type IModule = {
  id: number;
  title: string;
  position: number;
  courseId: number;
};

export type ModuleDetail = {
  id: number;
  title: string;
  position: number;
  course: {
    id: number;
    title: string;
    teacher: {
      name: string;
    };
    status: CourseStatus;
  };
  lessons: {
    id: number;
    title: string;
  }[];
};
