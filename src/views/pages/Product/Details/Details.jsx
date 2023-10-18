'use client'
//contains state and helper functions related to the Details component (mainly for the read more functionality)
import React from 'react'
import useDetails from './useDetails'

export default function Details() {
  const {isOpen , setIsOpen , showReadMoreBtn, setShowReadMoreBtn , paragraphRef} = useDetails()
  
  const paragraphStyles = {
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display : '-webkit-box'
  }

  return (
    <>
        <h2 className='text-xl font-light'>Details</h2>
        
        <div >
            <p ref={paragraphRef} style={isOpen ? null : paragraphStyles} className='mt-4  font-light text-slate-500'>
                Date de sortie 16/09/2022
            </p>
            {
            showReadMoreBtn &&
            <button className='mt-2 hover:text-orange-500' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? 'Read Less' : 'Read more'} </button>

            }
        </div>    
    </>
    )
}
