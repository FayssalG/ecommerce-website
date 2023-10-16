import React from 'react'
import DefaultLayout from '../../DefaultLayout'


//components
import Filters from './Filters/Filters'
import ProductsList from './ProductsList/ProductsList'
import Sort from './Sort/Sort'
import ProductsCatalogueProvider from './ProductsCatalogueProvider'

export default function ProductsCatalogue({products,categoriesFilter, brandsFilter , categoryTitle }) {
  
  return (
    <DefaultLayout>
      <ProductsCatalogueProvider products={products}>

        <div className='mt-10 mb-20'>
            {/* sorting options */}
            <div className='flex items-center gap-4 justify-between flex-wrap'>
              <div>
                <h1 className='font-bold  tracking-wider border-l-8 border-cyan-500 ps-2 text-2xl'>{categoryTitle ? categoryTitle : 'All'}</h1>
              </div>
              <Sort />
            </div>

            {/* Products and filters*/}
            <div className='grid gap-2 mt-8   lg:grid-cols-4 '> 
                {/* filters */}
                <div className='border-r p-4 flex flex-col h-full h-fit  gap-5 lg:col-span-1'>
                    <Filters 
                      categoriesFilter={categoriesFilter}
                      brandsFilter={brandsFilter} 
                    />
                </div>

                {/* Products */}
                <div className='bg-white  lg:col-span-3 '>
                    <ProductsList  />
                </div>
            </div>
        </div>
      </ProductsCatalogueProvider>    
    </DefaultLayout>
  )
}
