import axios from "axios";
import type { Product } from "../types/product";

const client = axios.create({
    baseURL : 'http://localhost:3000'
})

export async function getProducts(){
    const {data} = await client('/products')
    return data
}

export async function getProduct(id : string): Promise<Product>{
    const {data} = await client(`/products/${id}`)
    return data
}