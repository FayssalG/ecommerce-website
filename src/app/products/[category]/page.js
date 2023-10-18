
import CartProvider from '@/views/providers/CartProvider'
import { notFound } from 'next/navigation'

import React from 'react'
import {  getCategories , getBrands, checkCategory, getProducts} from '@/lib/sanity'
import ProductsCatalogue from '@/views/pages/ProductsCatalogue/ProductsCatalogue'



export default async function ProductsByCategoryPage({ params:{category} , searchParams:{q} }) {  
    const categoryObj = await checkCategory(category)
    if(!categoryObj) notFound()

    const productsByCategory = await getProducts(category , q) ?? []
    let categories = await getCategories(q)
    let brands = await getBrands(category, q)

    return (
      <CartProvider>
        <ProductsCatalogue categoryTitle={categoryObj.title}  products={productsByCategory} categoriesFilter={categories} brandsFilter={brands}/>
      </CartProvider>
    )
}
