import React from 'react'
import Product from '@/views/pages/Product/Product'
import CartProvider from '@/views/providers/CartProvider'

export default function ProductPage() {
  return (
    <CartProvider>
        <Product />
    </CartProvider>
  )
}
