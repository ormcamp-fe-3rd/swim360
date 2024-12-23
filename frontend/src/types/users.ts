import { Reviews } from "./reviews";

export interface User {
  id: number;
  name: string;
  emailId: string;
  phoneNumber: string; //
  password: string;
  adress: string;
}

export interface MyReview {
  // id: Reviews['id'];
  content: Reviews["content"];
  productId: number;
  productName: string;
  date: string;
}
