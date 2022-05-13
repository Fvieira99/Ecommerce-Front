import axios from "axios";

export function getProducts(page) {
  const promise = axios.get(
    `https://ecommerce-carax.herokuapp.com/products?page=${page}&limit=10`
  );
  return promise;
}
