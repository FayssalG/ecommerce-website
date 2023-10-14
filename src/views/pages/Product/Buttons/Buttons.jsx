'use client'

import React from 'react'
import { useProduct } from '../ProductProvider'
import {BsCart3 } from 'react-icons/bs'

export default function Buttons({product}) {
  const {addProductToCart} = useProduct()
  
  return (
    <>
        <button onClick={()=>addProductToCart(product)} className='flex w-full items-center justify-center gap-2 px-4 py-2  border border-slate-400 rounded-lg hover:opacity-75'>
            <BsCart3/>
            Add To Cart
        </button>
        <button className='bg-orange-500 w-full text-white rounded-lg px-4 py-2  hover:opacity-75 '>
            Buy Now
        </button>

    </>
  )
}
