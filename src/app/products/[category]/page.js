
import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'
import { notFound } from 'next/navigation'

import React from 'react'
import {  getCategories , getProductsByCategory , checkCategory} from '@/lib/sanity'






export default async function ProductsByCategoryPage({ params:{category} }) {
  category = category.toLowerCase()
  
  const isCategory = await checkCategory(category)
  if(!isCategory) notFound()

  const productsByCategory = await getProductsByCategory(category) ?? []
  const categories = await getCategories()
  return (
    <CartProvider>
      <ProductsListing category={category}  products={productsByCategory} categoriesFilter={categories}/>
    </CartProvider>
  )
}
