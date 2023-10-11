
import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'
import { notFound } from 'next/navigation'

import React from 'react'
import {  getCategories , getProductsByCategory , checkCategory} from '@/lib/sanity'






export default async function ProductsByCategoryPage({ params:{category} , searchParams:{q} }) {
  category = category.toLowerCase()
  const isCategory = await checkCategory(category)
  if(!isCategory) notFound()

  const productsByCategory = await getProductsByCategory(category , q) ?? []
  let categories = await getCategories()
  categories.unshift({name:'', title:'All'})
  if(q){
    categories = categories.map((cat)=>{
      return {...cat , name: cat.name + '?q='+q} 
     })
  }
  return (
    <CartProvider>
      <ProductsListing category={category}  products={productsByCategory} categoriesFilter={categories}/>
    </CartProvider>
  )
}
