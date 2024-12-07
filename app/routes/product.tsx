import { defer, LoaderFunctionArgs } from "@remix-run/node"
import { Await, useAsyncValue, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import Loading from "~/components/loading";
import ItemProduct from "~/components/product/item-product";
import { Product, product } from "~/data/product/product.server"

export const loader = async (args: LoaderFunctionArgs) => {

  const productsPromise = product.findAll("");
  return defer({
    productsPromise,
  })
}

export default function ProductPage() {
  const { productsPromise } = useLoaderData<typeof loader>();
  
  const Content = () => {
    const products = useAsyncValue() as Product[];
    return products.map((product) => <ItemProduct key={product.id} {...product} />)
  }

  return (
    <main className="flex justify-center max-w-5xl mx-auto flex-wrap">
      <Suspense fallback={<Loading />}>
        <Await resolve={productsPromise}>
          <Content />
        </Await>
      </Suspense> 
    </main>
  )
}

