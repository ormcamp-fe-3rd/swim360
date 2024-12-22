import axios from "@/services/index.ts";

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
