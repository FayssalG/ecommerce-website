
import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'
import { notFound } from 'next/navigation'

import React from 'react'
import {  getCategories , getProductsByCategory , checkCategory} from '@/lib/sanity'






export default async function ProductsByCategoryPage({ params:{category} , searchParams:{q} }) {
  
  const categoryObj = await checkCategory(category)
  if(!categoryObj) notFound()

  const productsByCategory = await getProductsByCategory(category , q) ?? []
    let categories = await getCategories()


    return (
      <CartProvider>
        <ProductsListing categoryTitle={categoryObj.title}  products={productsByCategory} categoriesFilter={categories}/>
      </CartProvider>
    )
}
