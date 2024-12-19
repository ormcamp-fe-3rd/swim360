import axios from "axios";

import { Product } from "@/types/products";

export async function getProduct(productId: Product["id"]){
  try {
    const response = await axios.get(
      `http://localhost:3000/products/${productId}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return "";
  }
}
