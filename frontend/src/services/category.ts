import axios from "@/services/index.ts";

export async function getCategories() {
  try {
    const response = await axios.get(`/categories`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
