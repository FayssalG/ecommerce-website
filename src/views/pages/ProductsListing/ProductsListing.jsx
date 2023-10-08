
import React from 'react'
import DefaultLayout from '../../DefaultLayout'


//components
import Filters from './Filters/Filters'
import Products from './Products/Products'

export default function ProductsListing({category}) {
  
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
                  <Filters/>
              </div>

              {/* Products */}
              <div className='bg-white  md:col-span-3 '>
                  <Products />
              </div>
          </div>
      </div>    
    </DefaultLayout>
  )
}
