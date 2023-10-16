import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
import {SlArrowLeft} from 'react-icons/sl'
import useGallery from './useGallery'

export default function GalleryDesktop({images}) {
    const {slideRef , scrollLeft , scrollRight , showScrollBtn ,activeImgIndex , setActiveImgIndex , changeActiveImg} = useGallery(images)
    
    return (
        <>
        <div className='h-[400px]  rounded-xl '>
            <img key={activeImgIndex} className='mx-auto h-full object-contain animate-fadeIn ' src={images[activeImgIndex]} alt="" />
        </div>
        <div className='relative'>
            {
                showScrollBtn?.left &&
                <button onClick={scrollLeft} className='absolute z-20 -left-5 top-7 bg-slate-100 shadow p-2 rounded-full'><SlArrowLeft   size={20}/> </button>
            }
            
            <div ref={slideRef} className='relative mt-4 flex gap-2 max-h-[100px] overflow-hidden [&>button]:shrink-0'>
                {
                    images.map((img , index)=>{

                        return (
                            <button style={{border : images[activeImgIndex]==img ? 'solid 2px orange' : null}}  onClick={()=>setActiveImgIndex(index)} key={index} className='w-32 rounded '> 
                                <img  className=' mx-auto h-full object-cover' src={img} alt="" />
                            </button>
                        )
                    })
                }
            </div>

            {
                showScrollBtn?.right &&
                <button onClick={scrollRight} className='absolute -right-5 top-7 bg-slate-100 shadow p-2 rounded-full'><SlArrowRight   size={20}/> </button>
            }
   
        </div>
    </>
    )
}
