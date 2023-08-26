import { toDoAppInterceptor } from "../utils/interceptor";

export const getProducts = async () => {
  console.log("get products running");
  const axiosResponse = await toDoAppInterceptor.get(
    "https://dummyjson.com/products"
  );
  const products = axiosResponse.data;
  console.log("Get Products Finished");
  return products;
};

export const getProductById = async (id) => {
  const axiosResponse = await toDoAppInterceptor.get(
    `https://dummyjson.com/products/${id}`
  );
  const product = axiosResponse.data;
  return product;
};
