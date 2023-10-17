'use client'
import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
import {SlArrowLeft} from 'react-icons/sl'
import Image from 'next/image'
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css'

import { urlForImage } from '../../../../../sanity/lib/image'
import useGallery from './useGallery'


export default function Gallery({images}) {
    const imagesUrl = images.map((img)=>urlForImage(img))
    const {slideRef , scrollLeft , scrollRight , showScrollBtn, activeThumbnail,setSwiper,slideTo} = useGallery(imagesUrl)
    
    return (
        <>
        <Swiper onSwiper={setSwiper} className='h-[400px] flex rounded-xl overflow-hidden [&>div]:shrink-0'>
            {
                imagesUrl.map((img , index)=>{                    
                    return (
                    <SwiperSlide key={index} className='swiper-pagination-horizontal'  >
                        <div className='h-full w-full'>
                            <Image  className='mx-auto h-full object-contain animate-fadeIn ' src={img.url()} width="700" height="700" alt="" />
                        </div>
                    </SwiperSlide>
                    
                    )
                })
            }
        </Swiper>
        <div className='relative'>
            {
                showScrollBtn?.left &&
                <button onClick={scrollLeft} className='absolute z-20 -left-5 top-7 bg-slate-100 shadow p-2 rounded-full hidden md:block'><SlArrowLeft   size={20}/> </button>
            }
            
            <div ref={slideRef} className='relative mt-4  gap-2 max-h-[100px] overflow-hidden [&>button]:shrink-0 hidden md:flex'>
                {
                    imagesUrl.map((img , index)=>{

                        return (
                            <button style={{border : activeThumbnail==index ? 'solid 2px orange' : null}}  onClick={()=>{slideTo(index)}} key={index} className='w-32 rounded '> 
                                <Image  className=' mx-auto h-full object-contain' src={img.url()} width="200" height="200" alt="" />
                            </button>
                        )
                    })
                }
            </div>

            {
                showScrollBtn?.right &&
                <button onClick={scrollRight} className='absolute -right-5 top-7 bg-slate-100 shadow p-2 rounded-full hidden md:block'><SlArrowRight   size={20}/> </button>
            }
   
        </div>
    </>
    )
}
