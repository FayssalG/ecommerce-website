'use client'

import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import Link from 'next/link'

import { useCartContext } from '@/views/providers/CartProvider'

import {urlForImage} from '../../../../../../sanity/lib/image'


export default function OneProduct({item}) {
  const {dispatch} = useCartContext() 
  return (
    <>
      <div className='relative hover:opacity-75 px-2 transition-opacity'>
        <div className=' flex justify-center bg-slate-100 px-2 py-4'>
          <img className=' w-56 h-56 object-contain' src={urlForImage(item.image[0])}/>
        </div>

        <div className='mt-2 relative '>
          <h2 className='text-sm '>{item.title}</h2>                              
          <p className=' text-orange-500 font-light'>${item.price}</p>
          <button onClick={()=>dispatch({type:'add-item',payload:item})} className='absolute z-10  top-0 right-2 '>
            <BsFillCartPlusFill className='hover:text-orange-500' size={24}/>
          </button>
        </div>
        <Link href={'/'+item.slug.current} className='absolute top-0 left-0 h-full w-full '></Link>
      </div>

    </>
  )
}
