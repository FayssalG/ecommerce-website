import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'
import React from 'react'

export default function Page() {
  
  return (
    <CartProvider>
      <ProductsListing />
    </CartProvider>
  )
}
