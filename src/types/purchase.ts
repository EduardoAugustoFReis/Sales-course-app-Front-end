export type PurchaseStatus = "PENDING" | "PAID" | "FAILED" | "CANCELED";

export type IPurchase = {
  cardNumber: string;
  holderName: string;
  expMonth: string;
  expYear: string;
  cvv: string;
};

export type UserPurchase = {
  id: number;
  price: number;
  status: PurchaseStatus;
  createdAt: string;
  course: {
    id: number;
    title: string;
    imageUrl: string | null;
    teacher: {
      name: string;
    };
  };
};

export type MyPurchasesResponse = {
  total: number;
  purchases: UserPurchase[];
};
