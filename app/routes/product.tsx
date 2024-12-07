import { defer, LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { product } from "~/data/product/product.server"

export const loader = async (args: LoaderFunctionArgs) => {

  const products = await product.findAll("");
  return defer({
    products,
  })
}

export default function ProductPage() {
  const { products } = useLoaderData<typeof loader>();  

  return (
    <main>      
    </main>
  )
}

