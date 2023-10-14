import CartProvider from '@/views/providers/CartProvider'
import React from 'react'

import {getProducts , getCategories} from '../../lib/sanity'
import ProductsCatalogue from '@/views/pages/ProductsCatalogue/ProductsCatalogue'
export const revalidate = 0 


export default async function ProductsListingPage({searchParams:{q}}) {
  const products = await getProducts(q)
  let categories = await getCategories(q)
  
  return (
    <CartProvider>
      <ProductsCatalogue products={products} categoriesFilter={categories}/>
    </CartProvider>
  )
}
