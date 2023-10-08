'use client'
import React from 'react'
import useProduct from '../useProduct'

export default function Quantity() {

    const {quantity , increaseQuantity , decreaseQuantity} = useProduct()
  return (
    <>
        <p className='text-slate-400'>Quantity : </p>
        <div className='shadow shadow-slate-200 rounded max-w-[100px] w-full py-1 grid grid-cols-3 '>
            <button onClick={decreaseQuantity}>-</button>
            <span className='text-center '>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
        </div>
    </>
  )
}
