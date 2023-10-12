'use client'

import React from 'react'
import { BiSearch } from 'react-icons/bi'
import useSearchbar from './useSearchbar'

export default function Searchbar({categories}) {
    const {inputRef , selectRef , handleChangeQuery} = useSearchbar()


    return (
    <form onSubmit={handleChangeQuery} methode='POST'>

        <div className='flex flex-col gap-2 border-orange-500 lg:flex-row lg:gap-0'>
            <input ref={inputRef} type='text' placeholder='Search for products' className='border-2 rounded-s-lg h-10 px-4 lg:w-96' />

            <select ref={selectRef} className='border-2  cursor-pointer  border-s-0 h-10  px-2 lg:w-26'>
                <option value='all'>All Categories</option>
                {
                    categories.map((cat , index)=>{
                        return <option key={index} value={cat.name} >{cat.title}</option>
                    })
                    
                }
            </select>

            <div className='bg-cyan-500  rounded-e-lg'>
                <button  className='flex  justify-center items-center py-1 w-full h-full  lg:w-12 '>
                  <BiSearch size={24} color='white'/>
                </button>
            </div>
            
        </div>

    </form>
  )
}
