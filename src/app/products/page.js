import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'
import React from 'react'

import {client} from '../../../sanity/lib/client'

async function getProducts(){
    const query = '*[_type == "product"]'
    let products = await client.fetch(query)
    return  products
}


export default async function Page() {
  const products = await getProducts()

  return (
    <CartProvider>
      <ProductsListing products={products} />
    </CartProvider>
  )
}
