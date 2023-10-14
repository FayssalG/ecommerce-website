'use client'
import { AiOutlinePlus } from 'react-icons/ai'

import OneProduct from './OneProduct/OneProduct'

import { useProductsCatalogue } from '../ProductsCatalogueProvider'
import Loading from '@/app/loading'

export default function ProductsList() {
  const {productsList , handleChangeCurrentPage} = useProductsCatalogue()
  if(!productsList) return <Loading/>
  return (
    <>
      {
          productsList.length == 0 &&  
          <div className='w-full h-full  flex items-center justify-center'>
            <p className=' text-center text-slate-500 text-xl'>No productsList Found</p> 

          </div>
        
      }
      <div className='w-full h-full grid gap-y-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 lg:gap-x-4'>
          {
            productsList.map((item , index)=>{
              console.log({item})
              if(item.length == 0) return
              return (
                  //one Product
                  <OneProduct item={item} key={index}/>
              )
            })
          }
      </div>

      {/* Pagination */}
      <div className='h-20 w-full  mt-5'>
          <button onClick={handleChangeCurrentPage} className='mx-auto text-xl flex justify-center items-center gap-2'>
              See more
              <AiOutlinePlus/>
          </button>
      </div>

    </>
  )
}
