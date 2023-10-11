
import React from 'react'
import DefaultLayout from '../../DefaultLayout'


//components
import Filters from './Filters/Filters'
import ProductsList from './ProductsList/ProductsList'


export default function ProductsListing({products ,categoriesFilter, brandsFilter , category }) {

  return (
    <DefaultLayout>
      <div className='mt-10 mb-20'>
          {/* sorting options */}
          <div className='flex items-center gap-4 justify-between flex-wrap'>
            <div>
              <h1 className='font-bold  tracking-wider border-l-8 border-cyan-500 ps-2 text-2xl'>{category ? category.toUpperCase() : 'All'}</h1>
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
          <div className='grid gap-2 mt-5   md:grid-cols-4 '> 
              {/* filters */}
              <div className='bg-slate-100 p-4 flex flex-col min-h-[200px] h-fit  gap-5 md:col-span-1'>
                  <Filters categoriesFilter={categoriesFilter}/>
              </div>

              {/* Products */}
              <div className='bg-white  md:col-span-3 '>
                  <ProductsList products={products} />
              </div>
          </div>
      </div>    
    </DefaultLayout>
  )
}
