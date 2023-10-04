import ProductsListing from '@/views/pages/ProductsListing/ProductsListing'
import CartProvider from '@/views/providers/CartProvider'

import React from 'react'

export default function ProductsByCategoryPage({ params:{category} }) {
  return (
    <CartProvider>
      <ProductsListing category={category} />
    </CartProvider>
  )
}
