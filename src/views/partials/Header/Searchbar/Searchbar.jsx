'use client'

import React from 'react'
import { BiSearch } from 'react-icons/bi'
import useSearchbar from './useSearchbar'

export default function Searchbar() {
    const {inputRef , selectRef , handleChangeQuery} = useSearchbar()
 return (
    <from className=''>

        <div className='flex flex-col gap-2 border-orange-500 lg:flex-row lg:gap-0'>
            <input ref={inputRef} type='text' placeholder='Search for products' className='border-2  h-10 px-4 lg:w-96' />

            <select ref={selectRef} className='border-2 cursor-pointer  border-s-0 h-10  px-2 lg:w-26'>
                <option>All Categories</option>
            </select>

            <div className='bg-cyan-500  '>
                <button onClick={handleChangeQuery} className='flex justify-center items-center py-1 w-full h-full  lg:w-12 '>
                  <BiSearch size={24} color='white'/>
                </button>
            </div>
        </div>

    </from>
  )
}
