import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
import {SlArrowLeft} from 'react-icons/sl'
import useGallery from './useGallery'

export default function GalleryMobile({picture}) {
    const {slideRef , scrollLeft , scrollRight , showScrollBtn} = useGallery()

    return (
        <>
        <div className='relative'>
            {
                showScrollBtn?.left &&
                <button onClick={scrollLeft} className='absolute left-1 top-44 bg-slate-100 shadow p-2 rounded-full'><SlArrowLeft   size={20}/> </button>
            }
            
            <div ref={slideRef} className='mt-4 max-h-[400px]  flex gap-2  overflow-hidden [&>div]:shrink-0'>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
                
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={picture} alt="" /></div>
            </div>        
            {
                showScrollBtn?.right &&
                <button onClick={scrollRight} className='absolute right-1 top-44 bg-slate-100 shadow p-2 rounded-full'><SlArrowRight   size={20}/> </button>
            }
   
        </div>
    </>
    )
}
