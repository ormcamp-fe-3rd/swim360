import { Reviews } from "./reviews";

export interface User {
  id: number;
  name: string;
  emailId: string;
  phoneNumber: string; //
  password: string;
}

export interface MyReview {
  // id: Reviews['id'];
  content: Reviews["content"];
  productId: number;
  productName: string;
  date: string;
}

export type UserResponse = SuccessResponse | ErrorResposne;

export interface SuccessResponse{
  status: 'success';
  data: User;
}

export interface ErrorResposne{
  status: 'error';
  data: string;
}