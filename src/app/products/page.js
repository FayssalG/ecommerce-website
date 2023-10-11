import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'
import React from 'react'

import {getProducts , getCategories} from '../../lib/sanity'
export const revalidate = 0 


export default async function ProductsListingPage({searchParams:{q}}) {
  const products = await getProducts(q)
  let categories = await getCategories()
  categories.unshift({name:'', title:'All'})
  if(q){
    categories = categories.map((cat)=>{
      return {...cat , name: cat.name + '?q='+q} 
     })
  }
  
  return (
    <CartProvider>
      <ProductsListing products={products} categoriesFilter={categories}/>
    </CartProvider>
  )
}
