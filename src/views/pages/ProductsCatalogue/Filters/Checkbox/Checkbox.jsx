import React from 'react'
import {MdDone} from 'react-icons/md'
import { useProductsCatalogue } from '../../ProductsCatalogueProvider'
//A custom checkbox 
export default function Checkbox({label}) {
  const {handleChangeCheckedBrands}= useProductsCatalogue()

  return (
    <div  className=' flex  items-center gap-2'>
        <input onChange={(e)=>handleChangeCheckedBrands(label)} id={label} type='checkbox'
        className='cursor-pointer relative peer appearance-none shrink-0 w-4 h-4 border-2 rounded-sm border-orange-500 
        checked:bg-orange-500 checked:border-0 '  
        />                      
        <label htmlFor={label} className='cursor-pointer select-none font-light text-sm'>{label}</label>
        <MdDone className='absolute text-white hidden pointer-events-none peer-checked:block'/>
    </div>
  )
}
