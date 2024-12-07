import axios from "axios";

export type Product = {
  id: number;
  title: string;
  images: string[];
  price: string;
  description: string;
}

export const product = {
  findAll: async (search: string): Promise<Product[]> => {
    const productPromise = await axios.get(`https://dummyjson.com/products/search?q=${search}`);

    return productPromise.data.products || [];
  }
};
