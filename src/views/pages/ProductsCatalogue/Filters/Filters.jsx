'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Checkbox from './Checkbox/Checkbox'
import useFilters from './useFilters'
import { useProductsCatalogue } from '../ProductsCatalogueProvider'

export default function Filters({categoriesFilter , brandsFilter}) {
  const pathname = usePathname()
  const {isFilterBrand , isFilterCategory , handleShowFilter} = useFilters()

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
                            //ignore the extra forward slash / if it exist
                            let isPath = category.route.match(new RegExp(`^${pathname}[\/]?$`,'g'))  
                            return (
                            <li key={index}>
                                <Link className={isPath ? 'text-orange-500' : ''} href={category.route+category.params} >{category.title}</Link>
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
                    {
                        brandsFilter.map((brand)=>{
                            return <li><Checkbox label={brand} /></li>

                        })
                    }

                </ul>
            }                   
        </div>
    </>
  )
}
