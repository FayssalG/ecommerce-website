import React, { useEffect, useRef, useState } from 'react'
import {SlArrowRight} from 'react-icons/sl'
import {SlArrowLeft} from 'react-icons/sl'
import useGallery from './useGallery'

export default function Gallery({picture}) {
    const {slideRef , scrollLeft , scrollRight , showScrollBtn} = useGallery()

    return (
    <div className=' rounded-xl w-1/2'>
        <div className='h-[400px] bg-slate-100 rounded-xl'>
            <img className='mx-auto h-full object-contain' src={picture} alt="" />
        </div>
        <div className='relative'>
            {
                showScrollBtn?.left &&
                <button onClick={scrollLeft} className='absolute -left-5 top-9 bg-slate-100 shadow p-2 rounded-full'><SlArrowLeft   size={20}/> </button>
            }
            <div ref={slideRef} className=' mt-4 flex  gap-2 max-h-[100px] overflow-hidden [&>button]:shrink-0'>
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
                
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
                <button className='w-32 p-4 border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></button>
            </div>        
            {
                showScrollBtn?.right &&
                <button onClick={scrollRight} className='absolute -right-5 top-9 bg-slate-100 shadow p-2 rounded-full'><SlArrowRight   size={20}/> </button>
            }
   
        </div>
    </div>
    )
}
