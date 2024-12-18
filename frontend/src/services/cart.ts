import axios from "@/services/index.ts";
import { UpdateCart } from "@/types/cart";

export async function getCart(userId: string) {
  await axios.get(`/carts/${userId}`);
}

export async function updateCartData(cartItem: UpdateCart) {
  try {
    const response = await axios.post(`/carts`, cartItem);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
