import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
import {SlArrowLeft} from 'react-icons/sl'
import useGallery from './useGallery'

export default function GalleryMobile({images}) {
    const {slideRef , scrollLeft , scrollRight , showScrollBtn } = useGallery()

    return (
        <>
        <div className='relative'>
            {
                showScrollBtn?.left &&
                <button onClick={scrollLeft} className='absolute left-1 top-44 bg-slate-100 shadow p-2 rounded-full'><SlArrowLeft   size={20}/> </button>
            }
            
            <div ref={slideRef} className='mt-4 h-[400px]  flex gap-2  overflow-hidden [&>div]:shrink-0'>
                {
                    images.map((img)=>{
                        return <div className='w-full   rounded-xl'> <img className='mx-auto h-full object-cover' src={img} alt="" /></div>
                        
                    })
                }
{/*             
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div>
                
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div>
                <div className='w-full border bg-slate-100 rounded-xl'> <img className='mx-auto h-full object-contain' src={images[0]} alt="" /></div> */}
            </div>        
            {
                showScrollBtn?.right &&
                <button onClick={scrollRight} className='absolute right-1 top-44 bg-slate-100 shadow p-2 rounded-full'><SlArrowRight   size={20}/> </button>
            }
   
        </div>
    </>
    )
}
