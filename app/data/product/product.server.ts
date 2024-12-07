import axios from "axios";

export const product = {
  findAll: async (search: string) => {
    const productPromise = await axios.get(`https://dummyjson.com/products/search?q=${search}`);

    return productPromise.data.products || [];
  }
};
