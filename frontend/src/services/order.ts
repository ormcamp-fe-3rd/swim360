import axios from "@/services/index.ts";
import { Order } from "@/types/orders";
import { OrderRequest } from "@/types/orders";

//유저 주문 불러오기
export async function getMyOrders(userId: string) {
  try {
    const response = await axios.get(`/orders/users/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createOrderData(orderData: OrderRequest) {
  try {
    const response = await axios.post("/orders", orderData);
    return response;
  } catch (error) {
    console.error("주문 오류:", error);
    alert("필수 입력 양식에 맞게 수정 부탁드립니다.");
  }
}

export async function getMyOrderStatus(userId: string): Promise<Order[]> {
  try {
    const response = await axios.get(`/orders/usersOrderStatus/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
