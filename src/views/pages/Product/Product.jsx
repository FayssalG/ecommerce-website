'use client'

import DefaultLayout from '@/views/DefaultLayout'
import React from 'react'

import { AiFillStar , AiOutlineStar }  from 'react-icons/ai'
import {BsCart3 } from 'react-icons/bs'

import item from './dummyProduct'
import useProduct from './useProduct'
import Details from './Details/Details'
import Gallery from './Gallery/Gallery'
import GalleryMobile from './Gallery/GalleryMobile'

export default function Product() {
  const {
    increaseQuantity , 
    decreaseQuantity, 
    quantity , 
    addProductToCart
    } = useProduct()

  return (
    <DefaultLayout>
        <div className='my-10'>


            <div className='flex items flex-wrap  gap-12 '>
                {/* Product Images  */}
                <div className=' rounded-xl w-full lg:w-1/2'>
                    <Gallery picture={item.picture}/>
                    {/* <Gallery picture={item.picture}/> */}
                </div>
                
                {/* Info */}
                <div className='w-full lg:max-w-[400px] '>
                   <h1 className='text-2xl'>{item.title} </h1>
                   <p className='text-sm pb-2 border-b-2 border-slate-100 '>
                        <span className='me-2'>Brand</span>
                        <span className='text-slate-400'>{item.brand}</span>
                    </p>

                    {/* Rating */}
                    <div className='mt-3'>
                        <ul className='flex items-center gap-1.5 [&>li]:flex  '>
                            <li> <button> <AiOutlineStar /> </button> </li>
                            <li> <button> <AiOutlineStar/> </button> </li>
                            <li> <button> <AiOutlineStar/> </button> </li>
                            <li> <button> <AiOutlineStar/> </button> </li>
                            <li> <button> <AiOutlineStar/> </button> </li>
                            <li className='ms-2 text-sm text-slate-400'>(500)</li>
                        </ul>
                    </div>
                    {/* Price */}
                    <p className='text-2xl text-orange-500 mt-5'>
                        $ {item.price}     
                    </p>

                    {/* Quantity */}
                    <div className='mt-9 flex items-center gap-12'>
                        <p className='text-slate-400'>Quantity : </p>
                        <div className='shadow shadow-slate-200 rounded max-w-[100px] w-full py-1 grid grid-cols-3 '>
                            <button onClick={decreaseQuantity}>-</button>
                            <span className='text-center '>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                    </div>

                    {/* Add to Cart and Buy Buttons */}
                    <div className='flex flex-col w-full gap-4 mt-4 lg:flex-row'>
                        <button onClick={()=>addProductToCart(item)} className='flex w-full items-center justify-center gap-2 px-4 py-2  border border-slate-400 rounded-lg hover:opacity-75'>
                            <BsCart3/>
                            Add To Cart
                        </button>
                        <button className='bg-orange-500 w-full text-white rounded-lg px-4 py-2  hover:opacity-75 '>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>



            {/* Details (Description and Specs) */}
            <div className='bg-slate-100 py-2 px-4 mt-10 rounded lg:me-20'>
                <Details/>
            </div>

            {/* Customers reviews */}
            <div className='bg-slate-100 py-2 px-4 mt-4 rounded lg:me-20'>
                <h2 className='text-xl font-light'>Reviews</h2>                
            </div>
        </div>
    </DefaultLayout>
  )
}
