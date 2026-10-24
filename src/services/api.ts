import axios from "axios";
import type { Product } from "../types/product";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getProducts() {
  const { data } = await client("/products");
  return data;
}

export async function getProduct(id: string): Promise<Product> {
  const { data } = await client(`/products/${id}`);
  return data;
}

export async function login(username: string) {
  const { data } = await client(
    `/users?username=${encodeURIComponent(username)}`,
  );

  return data;
}
