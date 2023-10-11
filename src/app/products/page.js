import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'
import React from 'react'

import {getProducts , getCategories} from '../../lib/sanity'


export const revalidate = 0 
export default async function ProductsListingPage() {
  const products = await getProducts()
  const categories = await getCategories()
  return (
    <CartProvider>
      <ProductsListing products={products} categoriesFilter={categories}/>
    </CartProvider>
  )
}
