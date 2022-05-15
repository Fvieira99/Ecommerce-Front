import axios from "axios";

// const BASE_URL = "https://ecommerce-carax.herokuapp.com";
const BASE_URL = "http://localhost:5555";

export function signUp(body) {
  const promise = axios.post(`${BASE_URL}/signup`, body);
  return promise;
}

export function signIn(body) {
  const promise = axios.post(`${BASE_URL}/signin`, body);
  return promise;
}

export function getProducts(page) {
  const promise = axios.get(`${BASE_URL}/products?page=${page}&limit=8`);
  return promise;
}

export function getSingleProduct(slug) {
  const promise = axios.get(`${BASE_URL}/product/${slug}`);
  return promise;
}

export function order(data) {
  const promise = axios.post(`${BASE_URL}/order`, data, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
  return promise;
}
