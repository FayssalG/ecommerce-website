'use client'

import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import useProductListing from '../useProductListing'
import OneProduct from './OneProduct/OneProduct'


export default function Products({products}) {
  return (
    <>
      <div className='w-full h-full grid gap-y-9 md:grid-cols-3 md:gap-y-10 md:gap-x-4'>
          {
          products.map((item , index)=>{
          return (
              //one Product
              <OneProduct item={item} key={index}/>
          )
          })
          }
      </div>

      {/* Pagination */}
      <div className='h-20 w-full  mt-5ù'>
          <button className='mx-auto text-xl flex justify-center items-center gap-2'>
              See more
              <AiOutlinePlus/>
        </button>
      </div>

    </>
  )
}
