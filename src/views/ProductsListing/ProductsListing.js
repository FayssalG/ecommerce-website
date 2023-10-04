'use client'

import React from 'react'
import DefaultLayout from '../DefaultLayout'

import product from '@/assets/product.png'
import Link from 'next/link'
import Checkbox from './components/Checkbox'
import useProductListing from './useProductListing'

export default function ProductsListing() {
  const {handleShowFilter , isFilterBrand , isFilterCategory} = useProductListing()

  return (
    <DefaultLayout>
      <div className='my-10'>
          {/* sorting options */}
          <div className=''>
            
            <div>
                <div className='flex items-center justify-end'>
                  <span className='text-slate-400 text-sm me-5'>Sort By</span>
                  <select className='border-0 cursor-pointer'>
                    <option>Price Ascending</option>
                    <option>Price Descending</option>
                    <option>Featured</option>
                  </select>
                </div>
            </div>

          </div>

          {/* Products and filters*/}
          <div className='grid gap-2 mt-2  min-h-[900px] md:grid-cols-4 '> 
              {/* filters */}
              <div className='bg-slate-100 p-4 flex flex-col  gap-5 md:col-span-1'>
                {/* category filter */}
                <div className=''>
                    <button className='font-bold' data-filtertype='category' onClick={handleShowFilter}>
                      Category {isFilterCategory ? '-' : '+'} 
                    </button>
                    {isFilterCategory &&
                      <ul className='ms-4 mt-4 flex flex-col gap-2 origin-top animate-fadeIn'>
                        <li><Checkbox label='Smartphones' /></li>
                        <li><Checkbox label='Smartwatches' /></li>
                        <li><Checkbox label='Accessories' /></li>
                        <li><Checkbox label='TV & Audio' /></li>
                      </ul>
                    }                   
                </div>

                {/* Brand filter */}
                <div className=''>
                    <button className='font-bold' data-filtertype='brand' onClick={handleShowFilter}>
                      Brand {isFilterBrand ? '-' : '+'} 
                    </button>
                    {isFilterBrand &&
                      <ul className='ms-4 mt-4 flex flex-col gap-2 origin-top animate-fadeIn'>
                        <li><Checkbox label='Smartphones' /></li>
                        <li><Checkbox label='Smartwatches' /></li>
                        <li><Checkbox label='Accessories' /></li>
                        <li><Checkbox label='TV & Audio' /></li>
                      </ul>
                    }                   
                </div>
              </div>

              {/* Products */}
              <div className='bg-white  md:col-span-3 '>
                  <div className='w-full h-full grid gap-y-9 md:grid-cols-3 md:gap-y-10 md:gap-x-4'>
                    {
                      [1,1,1,1,1,1,1,5,5,5,5].map(()=>{
                        return (
                          //one Product
                          <div className='relative hover:scale-105 transition-transform'>
                            <div className='flex justify-center bg-slate-100 px-2 py-4'>
                              <img className='w-52 h-52 object-cover' src={product.src}/>
                            </div>
                            <div className='mt-2'>
                              <h2 className='text-sm font-bold'>Iphone 14 pro</h2>
                              <p className=' text-orange-500 font-light'>$999.99</p>
                            </div>
                            <Link href='/' className='absolute top-0 left-0 h-full w-full '></Link>
                          </div>
                        )
                      })
                    }
                  </div>
                 
              </div>
          </div>
      </div>    
    </DefaultLayout>
  )
}
