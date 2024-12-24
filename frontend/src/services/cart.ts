import axios from "@/services/index.ts";
import { Cart } from "@/types/cart";
import { User } from "@/types/users";

export async function getCartListData(userId: User["id"]) {
  try {
    const response = await axios.get(`/carts/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCartCount(userId: User["id"]) {
  try {
    const response = await axios.get(`/carts/${userId}/count`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateCartData(cartItems: Cart[]) {
  try {
    const response = await axios.post(`/carts`, cartItems);

    return response;
  } catch (error) {
    console.error(error);
  }
}
