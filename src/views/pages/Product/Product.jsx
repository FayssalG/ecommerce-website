import DefaultLayout from '@/views/DefaultLayout'
import React from 'react'

import { AiFillStar , AiOutlineStar }  from 'react-icons/ai'

import {BsCart3 } from 'react-icons/bs'

import Details from './Details/Details'
import Gallery from './Gallery/Gallery'
import Quantity from './Quantity/Quantity'
import Buttons from './Buttons/Buttons'
import ProductProvider from './ProductProvider'
import Specs from './Specs/Specs'


export default function Product({product}) {
  
 
  return (
    <DefaultLayout>
        <ProductProvider>
            <div className='my-10'>
                <div className='flex items flex-wrap  gap-12 '>
                    {/* Product Images  */}
                    <div className=' rounded-xl w-full lg:w-1/2'>
                        <Gallery images={product.image}/>
                    </div>
                    
                    {/* Info */}
                    <div className='w-full lg:max-w-[400px] '>
                    <h1 className='text-2xl'>{product.title} </h1>
                    <p className='text-sm pb-2 border-b-2 border-slate-100 '>
                            <span className='me-2'>Brand</span>
                            <span className='text-slate-400'>{product.brand}</span>
                        </p>

                        {/* Rating */}
                        <div className='mt-3'>
                            <ul className='flex items-center gap-1.5 [&>li]:flex  '>
                                <li> <button> <AiOutlineStar /> </button> </li>
                                <li> <button> <AiOutlineStar/> </button> </li>
                                <li> <button> <AiOutlineStar/> </button> </li>
                                <li> <button> <AiOutlineStar/> </button> </li>
                                <li> <button> <AiOutlineStar/> </button> </li>
                                {/* <li className='ms-2 text-sm text-slate-400'>(15)</li> */}
                            </ul>
                        </div>
                        {/* Price */}
                        <p className='text-2xl text-orange-500 mt-5'>
                            $ {product.price}     
                        </p>

                        {/* Quantity */}
                        <div className='mt-9 flex items-center gap-12'>
                        
                            <Quantity />
                        </div>

                        {/* Add to Cart and Buy Buttons */}
                        <div className='flex flex-col w-full gap-4 mt-4 lg:flex-row'>
                        <Buttons product={product}/>
                        </div>
                    </div>
                </div>



                {/* Details (Descriptio) */}
                <div className='bg-slate-100 py-2 px-4 mt-10 rounded lg:me-20'>
                    <Details/>
                </div>

                {/* Specs */}
                <Specs specs={product?.specs}/>

                {/* Customers reviews */}
                {/* <div className='bg-slate-100 py-2 px-4 mt-4 rounded lg:me-20'>
                    <h2 className='text-xl font-light'>Reviews</h2>                
                </div> */}
            </div>

        </ProductProvider>
    </DefaultLayout>
  )
}
