import axios from "@/services/index.ts";
import { UpdateCart } from "@/types/cart";

export async function getCartList(userId: number) {
  try {
    const response = await axios.get(`/carts/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCartCount(userId: number) {
  try {
    const response = await axios.get(`/carts/${userId}/count`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateCartData(cartItem: UpdateCart) {
  try {
    const response = await axios.post(`/carts`, cartItem);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
