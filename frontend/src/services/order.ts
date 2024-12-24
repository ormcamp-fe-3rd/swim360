import { useNavigate } from "react-router-dom";

import axios from "@/services/index.ts";
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

export async function createOrderData(
  orderData: OrderRequest,
  navigate: ReturnType<typeof useNavigate>,
) {
  try {
    const response = await axios.post("/orders", orderData);
    console.log("응답 상태 코드:", response.status);
    console.log("응답 데이터:", response.data);
    if (response.status === 200) {
      alert("주문이 성공적으로 완료되었습니다!");
      navigate("/payment");
    } else {
      throw new Error("서버 오류");
    }
  } catch (error) {
    console.error("주문 오류:", error);
    alert("주문 중 문제가 발생했습니다.");
  }
}
