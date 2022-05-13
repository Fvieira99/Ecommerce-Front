import axios from "axios";

export function getProducts(page) {
  const promise = axios.get(
    `http://localhost:5000/products?page=${page}&limit=10`
  );
  return promise;
}
