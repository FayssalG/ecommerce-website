'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Checkbox from './Checkbox/Checkbox'
import useProductListing from '../useProductListing'

export default function Filters({categoriesFilter , brandsFilter}) {
  const {handleShowFilter , isFilterBrand , isFilterCategory } = useProductListing()
  const pathname = usePathname()
    
  return (
    <>
        <div className=''>
            <button className='' data-filtertype='category' onClick={handleShowFilter}>
                Category {isFilterCategory ? '-' : '+'} 
            </button>
            {isFilterCategory &&
                <ul   className='font-light ms-4 mt-4 flex flex-col gap-2 origin-top '>
                    {
                        categoriesFilter.map((category,index)=>{
                            let newPathname = pathname                            
                            if(newPathname=='/products') newPathname = '/products/' 
                            let isPath = newPathname == '/products/'+category.name
                            return (
                            <li key={index}>
                                <Link className={isPath ? 'text-orange-500' : ''} href={'/products/'+category.name+category.withParams} >{category.title}</Link>
                            </li>
                            )
                        })                            
                    }
                    {/* <li><Link href='/products/smartwatches' >Smartwatches</Link></li>
                    <li><Link href='/products/accessories' >Accessories</Link></li> 
                    <li><Link href='/products/tv-audio' >TV & Audio</Link></li> */}
                </ul>
            }                   
        </div>

            {/* Brand filter */}
        <div className=''>
            <button className='' data-filtertype='brand' onClick={handleShowFilter}>
                Brand {isFilterBrand ? '-' : '+'} 
            </button>
            {isFilterBrand &&
                <ul className='font-light ms-4 mt-4 flex flex-col gap-2 origin-top animate-slideDown'>
                <li><Checkbox label='Apple' /></li>
                <li><Checkbox label='Asus' /></li>
                <li><Checkbox label='Samsung' /></li>
                <li><Checkbox label='LG' /></li>
                </ul>
            }                   
        </div>
    </>
  )
}
