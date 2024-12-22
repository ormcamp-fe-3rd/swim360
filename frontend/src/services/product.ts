import axios from "@/services/index.ts";

export async function getProduct(productId: number) {
  try {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductDetail(productId: number) {
  try {
    const response = await axios.get(`/products/detail/${productId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


export async function getProductListData(categoryId: number) {
  try {
    const response = await axios.get(`/products/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


export async function getBestProducts(){
  try{
    const response = await axios.get('/products/bestProducts');
    return response.data;
  }catch(error){
    console.log(error);
  }
}