'use client'

import React from 'react'
import DefaultLayout from '../../DefaultLayout'

import Link from 'next/link'
import Checkbox from './Checkbox/Checkbox'
import useProductListing from './useProductListing'

import { AiOutlinePlus } from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillCartPlusFill} from 'react-icons/bs'
import  { useCartContext } from '@/views/providers/CartProvider'


export default function ProductsListing({category}) {
  
  const {handleShowFilter , isFilterBrand , isFilterCategory , products} = useProductListing()
  const {dispatch} = useCartContext() 

  return (
    <DefaultLayout>
      <div className='mt-10 mb-20'>
          {/* sorting options */}
          <div className='flex items-center gap-4 justify-between flex-wrap'>
            <div>
              <h1 className='font-bold text-xl'>{category}</h1>
            </div>
            <div>
                <div className='flex items-center justify-end'>
                  <span className='text-slate-400 text-sm me-5'>Sort By</span>
                  <select className='border-0 text-sm cursor-pointer'>
                    <option>Price Ascending</option>
                    <option>Price Descending</option>
                    <option>Featured</option>
                  </select>
                </div>
            </div>

          </div>

          {/* Products and filters*/}
          <div className='grid gap-2 mt-5  min-h-[900px] md:grid-cols-4 '> 
              {/* filters */}
              <div className='bg-slate-100 p-4 flex flex-col min-h-[200px] h-fit  gap-5 md:col-span-1'>
                {/* category filter */}
                <div className=''>
                    <button className='' data-filtertype='category' onClick={handleShowFilter}>
                      Category {isFilterCategory ? '-' : '+'} 
                    </button>
                    {isFilterCategory &&
                      <ul className='font-light ms-4 mt-4 flex flex-col gap-2 origin-top animate-fadeIn'>
                        <li><Link href='/products/smartphones' >Smartphones</Link></li>
                        <li><Link href='/products/smartwatches' >Smartwatches</Link></li>
                        <li><Link href='/products/accessories' >Accessories</Link></li> 
                        <li><Link href='/products/tv-audio' >TV & Audio</Link></li>
                      </ul>
                    }                   
                </div>

                {/* Brand filter */}
                <div className=''>
                    <button className='' data-filtertype='brand' onClick={handleShowFilter}>
                      Brand {isFilterBrand ? '-' : '+'} 
                    </button>
                    {isFilterBrand &&
                      <ul className='font-light ms-4 mt-4 flex flex-col gap-2 origin-top animate-fadeIn'>
                        <li><Checkbox label='Apple' /></li>
                        <li><Checkbox label='Asus' /></li>
                        <li><Checkbox label='Samsung' /></li>
                        <li><Checkbox label='LG' /></li>
                      </ul>
                    }                   
                </div>
              </div>

              {/* Products */}
              <div className='bg-white  md:col-span-3 '>
                  <div className='w-full h-full grid gap-y-9 md:grid-cols-3 md:gap-y-10 md:gap-x-4'>
                    {
                      products.map((item , index)=>{
                        return (
                          //one Product
                          <div key={index} className='relative hover:opacity-75 px-2 transition-opacity'>
                            <div className=' flex justify-center bg-slate-100 px-2 py-4'>
                              <img className=' w-56 h-56 object-contain' src={item.picture}/>
                            </div>

                            <div className='mt-2 relative '>
                              <h2 className='text-sm '>{item.title}</h2>                              
                              <p className=' text-orange-500 font-light'>${item.price}</p>
                              <button onClick={()=>dispatch({type:'add-item',payload:item})} className='absolute z-10  top-0 right-2 '>
                                <BsFillCartPlusFill className='hover:text-orange-500' size={24}/>
                              </button>
                            </div>
                            <Link href='/' className='absolute top-0 left-0 h-full w-full '></Link>
                          </div>
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

              </div>
          </div>
      </div>    
    </DefaultLayout>
  )
}
