import Image from 'next/image'
import Homepage from '@/views/pages/Homepage/Homepage'
import CartProvider from '@/views/providers/CartProvider'
import { client } from '../../sanity/lib/client'


async function getCategories(){
  const query = '*[_type=="category"]'
  const categories = await client.fetch(query)
  return categories
}

export default async function Home() {
  const categories = await getCategories()

  return (
   <CartProvider>
     <Homepage categories={categories} />
   </CartProvider>
  )
  
}
