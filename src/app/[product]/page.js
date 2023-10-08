import React from 'react'
import Product from '@/views/pages/Product/Product'
import CartProvider from '@/views/providers/CartProvider'
import {client} from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'


async function getProduct(slug){
  const query = `*[_type=="product" && slug.current=="${slug}"]`
  const product = await client.fetch(query)
  return product[0]
}


export default async function ProductPage({params : {product : productSlug}}) {
  const product = await getProduct(productSlug) 

  return (
    <CartProvider>
        <Product product={product}/>
    </CartProvider>
  )
}
