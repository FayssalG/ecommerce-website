import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'
import { useRouter } from 'next/router'
import React from 'react'

export default function Page() {
  const router = useRouter()
  console.log(router)
  return (
    <CartProvider>
      <ProductsListing />
    </CartProvider>
  )
}
