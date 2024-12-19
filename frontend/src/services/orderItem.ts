import axios from "axios";

//주문번호로 주문상품 불러오기
export async function getOrderItems(orderId: string) {
  try {
    const response = await axios.get(
      `http://localhost:3000/orderItems/orders/${orderId}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
