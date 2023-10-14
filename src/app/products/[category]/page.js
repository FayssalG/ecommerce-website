
import CartProvider from '@/views/providers/CartProvider'
import { notFound } from 'next/navigation'

import React from 'react'
import {  getCategories , getProductsByCategory , checkCategory} from '@/lib/sanity'
import ProductsCatalogue from '@/views/pages/ProductsCatalogue/ProductsCatalogue'






export default async function ProductsByCategoryPage({ params:{category} , searchParams:{q} }) {
  
    const categoryObj = await checkCategory(category)
    if(!categoryObj) notFound()

    const productsByCategory = await getProductsByCategory(category , q) ?? []
    let categories = await getCategories(q)


    return (
      <CartProvider>
        <ProductsCatalogue categoryTitle={categoryObj.title}  products={productsByCategory} categoriesFilter={categories}/>
      </CartProvider>
    )
}
