import axios from "@/services/index.ts";

//주문번호로 주문상품 불러오기
export async function getOrderItems(orderId:number) {
  try {
    const response = await axios.get(`/orderItems/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
