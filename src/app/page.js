import Image from 'next/image'
import Homepage from '@/views/pages/Homepage/Homepage'
import CartProvider from '@/views/providers/CartProvider'

export default function Home() {
  return (
   <CartProvider>
     <Homepage/>
   </CartProvider>
  )
  
}
