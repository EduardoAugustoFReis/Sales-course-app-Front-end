type IPurchase = {
  cardNumber: string;
  holderName: string;
  expMonth: string;
  expYear: string;
  cvv: string;
};

export type MyPurchasedCourses = {
  id: number;
  courseId: number;
  course: {
    title: string;
    price: number;
    imageUrl: string | null;
    teacher: {
      name: string;
    };
  };
};