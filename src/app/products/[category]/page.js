import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'

import React from 'react'
import { client } from '../../../../sanity/lib/client'

async function getProductsByCategory(category){
  const query = `*[_type == "category" && name=="smartphones"]{
    "products" : *[_type=="product" && references(^._id)]
  }`
  let products = await client.fetch(query)
  return  products[0].products
}


export default async function ProductsByCategoryPage({ params:{category} }) {
  const productsByCategory = await getProductsByCategory(category)
  return (
    <CartProvider>
      <ProductsListing category={category}  products={productsByCategory}/>
    </CartProvider>
  )
}
