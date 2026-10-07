import axios from 'axios'
import type { IProduct } from '../types/server';

export type ProductCategory = "Tshirt" | "Shoes" | "Hat";

const client = axios.create({
    baseURL : 'http://localhost:8000'
})

export async function getProducts() {
    const {data} = await client('/products')
    return data 
}

export async function getProduct(
  id: string | number
): Promise<IProduct> {
  const { data } = await client(`/products/${id}`);
  return data;
}

export async function getMagazine() {
    const {data} = await client('/magazines')
    return data   
}
export async function getMagazineItem(id : string | number){
    const {data} = await client(`/magazines/${id}`)
    return data
}

export async function login(username: string) {
  const { data } = await client(
    `/users?username=${encodeURIComponent(username)}`
  );

  return data;
}

export async function getProductsByCategory(
  category: ProductCategory
): Promise<IProduct[]> {
  const { data } = await client(
    `/products?category=${encodeURIComponent(category)}`
  );

  return data;
}