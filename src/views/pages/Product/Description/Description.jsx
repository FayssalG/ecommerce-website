'use client'
//contains state and helper functions related to the Details component (mainly for the read more functionality)
import React from 'react'
import useDescription from './useDescription'

export default function Description() {
  const {isOpen , setIsOpen , showReadMoreBtn, paragraphRef} = useDescription()
  
  const paragraphStyles = {
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display : '-webkit-box'
  }

  return (
    <>
        <h2 className='text-xl font-light'>Description</h2>
        
        <div >
            <p ref={paragraphRef} style={isOpen ? null : paragraphStyles} className='mt-4  font-light text-slate-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui praesentium numquam cumque aliquid enim vel rerum temporibus totam quidem assumenda natus nostrum eum magnam dolore veritatis, facere architecto adipisci.
            </p>
            {
            showReadMoreBtn &&
            <button className='mt-2 hover:text-orange-500' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? 'Read Less' : 'Read more'} </button>

            }
        </div>    
    </>
    )
}
