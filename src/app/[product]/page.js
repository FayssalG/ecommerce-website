import React from 'react'
import Product from '@/views/pages/Product/Product'
import CartProvider from '@/views/providers/CartProvider'
import { notFound } from 'next/navigation'


import { getProduct } from '@/lib/sanity'





export default async function ProductPage({params : {product : productSlug}}) {
  const product = await getProduct(productSlug) 
  if(!product) notFound()

  return (
    <CartProvider>
        <Product product={product}/>
    </CartProvider>
  )
}
