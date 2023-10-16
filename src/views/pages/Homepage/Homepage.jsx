'use client'
import React from 'react'
import DefaultLayout from '../../DefaultLayout'
import Image from 'next/image'
import {SlArrowRight} from 'react-icons/sl'
import {FaTruckFast} from 'react-icons/fa6'
import Link from 'next/link'
import OneProduct from '../ProductsCatalogue/ProductsList/OneProduct/OneProduct'
import { urlForImage } from '../../../../sanity/lib/image'


function Homepage({categories , productsPerCategory , primaryBanner ,secondaryBanners}) {

  return (
    <DefaultLayout>
      <div className=''>
        {/* Top section */}
        <div  className=''>        
          {/* navigation */}
          <div className='pt-4 mt-5 border-t-2'>
            <nav >
              <ul className='flex gap-5 flex-col md:flex-row'>
                {
                  categories.map((category , index)=>{
                    if(category.route == '/products/') return
                    return <li key={index} className='text-slate-500'><Link href={category.route}>{category.title}</Link></li>
                  })
                }              
              </ul>
            </nav>
          </div>
          
          {/* Hero Products */}
          <div className='grid grid-cols-1 gap-2 mt-4 min-h-[400px] md:grid-cols-3'>

              <div className='shadow  flex  items-center md:row-span-2 md:col-span-2'>
                <div className='w-1/2 flex flex-col justify-center gap-2 p-5 '>
                  <p className='text-sm text-orange-500 font-bold'>Deals of the day</p>
                  <h2 className='text-2xl font-bold '>{primaryBanner.title}</h2>                  
                  <p className='text-sm text-gray-500 mt-4'>
                    {primaryBanner.smallText}
                  </p>
                  <Link href={primaryBanner.slug} className='bg-cyan-500 w-fit p-2 px-4 text-white text-sm mt-4 '>SHOP NOW</Link>
                </div>

                <div className='w-1/2' >
                    <Image className='object-contain' src={urlForImage(primaryBanner.image).url()} width="400" height="400"></Image>
                </div>
              </div>
              {
                secondaryBanners.map((banner , index)=>{
                  return(
                    <div key={index} className='relative shadow flex justify-around min-h-[220px] px-2'>
                      <div className='w-1/2 h-full flex flex-col  justify-around ps-2 '>
                          <h2 className='text-sm font-bold '>{banner.title}</h2>
                          <div className=''>
                            <p className='text-slate-500 text-sm '>
                              Weekend Discount
                            </p>  
                            <span className='font-bold text-lg text-orange-500 me-2'>${banner.price}</span>
                            <span className='text-sm text-gray-500 line-through'>${banner.oldPrice}</span>
                          </div>
        
                      </div>
                      <div className='w-[120px] flex items-center'>
                        <Image className='object-contain' src={urlForImage(banner.image).url()} width="200" height="200"></Image>
                      </div>
                      <Link className='absolute h-full w-full top-0 left-0' href={banner.slug}></Link>
                    </div>
                  )    
                })
              }
                           
          </div>
        
        </div>

        {/* our Services section */}
        <div className='flex flex-col justify-between items-center gap-4 mt-12 md:flex-row'>
         
          <div className='flex flex-col gap-2 items-center md:flex-row'>
              <div className='flex items-center justify-center w-16 h-16 bg-red-200 rounded-full '>
                  <FaTruckFast size={25} color='red' />
              </div>
              <div className='text-center md:text-left'>
                <h3 className='text-lg font-bold'>Free Delivery</h3>
                <p className='text-gray-500 text-sm'>Free shiping on all orders</p>
              </div>
          </div>

          <div className='flex flex-col gap-2 items-center md:flex-row'>
              <div className='flex items-center justify-center w-16 h-16 bg-red-200 rounded-full '>
                  <FaTruckFast size={25} color='red' />
              </div>
              <div className='text-center md:text-left'>
                <h3 className='text-lg font-bold'>Free Delivery</h3>
                <p className='text-gray-500 text-sm'>Free shiping on all orders</p>
              </div>
          </div>

          <div className='flex flex-col gap-2 items-center md:flex-row'>
              <div className='flex items-center justify-center w-16 h-16 bg-red-200 rounded-full '>
                  <FaTruckFast size={25} color='red' />
              </div>
              <div className='text-center md:text-left'>
                <h3 className='text-lg font-bold'>Free Delivery</h3>
                <p className='text-gray-500 text-sm'>Free shiping on all orders</p>
              </div>
          </div>

        </div>
              
        
        {/* Highlighted  products section */}
        {/* 
        <div className='mt-12 '>
          <div className='grid grid-cols-1 gap-4 min-h-[500px] md:grid-cols-3'>

            {/* Deal of the day product *
            <div className='bg-gray-100 flex flex-col gap-4 p-4 py-10 md:row-span-2 md:col-span-2 md:flex-row'>
                <div className='bg-green-500 min-h-[200px]  md:w-1/2 '>
                    {/* Image here 
                </div>
                
                <div className='mt-6 md:w-1/2 '>
                  <p className='text-sm text-orange-500 font-bold bg-orange-100 w-fit px-2 rounded'>Deals of the day</p>
                  <h2 className='text-2xl font-bold mt-2'>Xbox Elite Wireless Controller Series 2</h2>  

                  <p className='mt-5'>
                    <span className='font-bold text-2xl text-orange-500 me-2'>$139.99</span>
                    <span className='text-sm text-gray-500 line-through'>$179.99</span>
                  </p>

                  <p className='text-sm text-gray-500 mt-5'>
                    The Xbox Elite Wireless Controller Series 2 features over 30 ways to play like a pro, including adjustable-tension thumbsticks 
                  </p>

                  <div className='mt-7'>
                    <div className='flex justify-between'>
                      <p>Sold: 15</p>
                      <p>Available: 85</p>
                    </div>
                    <div className='h-2 w-full bg-white rounded mt-2'>
                      <div className='h-full w-1/5 bg-cyan-500 rounded'></div>
                    </div>
                  </div>

                  <div className='mt-7'>
                    <p>Offer ends in :</p>
                    <div className='flex gap-2 text-center items-center mt-2'>
                        <div className='relative'>
                          <p className='bg-white p-4 text-lg'>10</p> 
                          <span className='text-sm absolute left-0 w-full mt-1'>Hours</span>
                        </div>
                        :
                        <div className='relative'>
                          <p className='bg-white p-4 text-lg '>00</p>
                          <span className='text-sm absolute left-0 w-full mt-1'>Minutes</span>
                        </div>
                        :                        
                        <div className='relative'>
                          <p className='bg-white p-4 text-lg'>00</p>
                          <span className='text-sm absolute left-0 w-full mt-1'>Seconds</span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>

            <div  className='bg-red-500'>2</div>
            <div  className='bg-cyan-500'>4</div>
        
          </div>
        </div>
      */}
        
        {/* Some Products */}
        {
          categories.map((category , index)=>{
            if(category.name == '') return
            return(
                <div key={index} className='mt-12 p-4 shadow'>
                  <div className='flex items-center gap-4 '>
                    <h2 className='font-bold text-xl py-2 '>{category.title}</h2>
                    <a href={'/products/'+category.name} className='text-orange-500 font-light '>show more</a>
                  </div>
                  <div className='grid grid-cols-1 py-2 min-h-[250px] [&>div]:min-h-[220px] gap-4 md:grid-cols-4'>
                    {
                      productsPerCategory.map((product , index)=>{
                        if(product.category.name != category.name ) return
                        return (
                            <OneProduct key={index} item={product}/>
                        )
                      })
                    }  
                  </div>
                </div>
              )      
          })
        }

      </div>
        
      
    </DefaultLayout>
  )
}

export default Homepage