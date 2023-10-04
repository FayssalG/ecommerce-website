import React from 'react'
import DefaultLayout from '../../DefaultLayout'

import {SlArrowRight} from 'react-icons/sl'
import {FaTruckFast} from 'react-icons/fa6'

function Homepage() {
  
  return (
    <DefaultLayout>
      <div className='py-5'>
        {/* Top section */}
        <div  className='border-t-2 pt-5'>        
          {/* navigation */}

          {/* <div className='h-96 bg-slate-200 w-1/4'>
              <nav>
                <ul className='text-gray-500 p-4  '>
                  {
                    [1,2,2,2].map(()=>{
                      return (
                        <li className=' my-4 '>
                          <a href='#' className='flex items-center justify-between'>
                            Cell phones
                            <SlArrowRight/>
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
              </nav>
          </div>
          */}
          <div className=''>
            <nav >
              <ul className='flex gap-5 flex-col md:flex-row'>
                <li className='text-slate-500'>Cell Phones</li>
                <li className='text-slate-500'>Computers & accessories</li>
                <li className='text-slate-500'>Television & Video</li>
                <li className='text-slate-500'>Smartwatches</li>
              
              </ul>
            </nav>
          </div>
          {/* Hero Products */}
          <div className='grid grid-cols-1 gap-2 mt-4 min-h-[400px] md:grid-cols-3'>

              <div className='bg-slate-100  flex  items-center md:row-span-2 md:col-span-2'>
                <div className='w-1/2 flex flex-col justify-center gap-2 p-5 '>
                  <p className='text-sm text-orange-500 font-bold'>Deals of the day</p>
                  <h2 className='text-2xl font-bold '>Xbox Elite Wireless Controller Series 2</h2>                  
                  <p className='text-sm text-gray-500 mt-4'>
                    The Xbox Elite Wireless Controller Series 2 features over 30 ways to play like a pro, including adjustable-tension thumbsticks 
                  </p>
                  <button className='bg-cyan-500 w-fit p-2 px-4 text-white text-sm mt-4 '>SHOP NOW</button>
                </div>

                <div className='w-1/2' >
                    <img className='object-fit' src='https://resource.logitech.com/content/dam/gaming/en/products/g335/g335-black-gallery-1.png'></img>
                </div>
              </div>

              <div className='bg-cyan-100 flex'>
                <div className='w-1/2 h-full flex flex-col  justify-around ps-5 '>
                    <h2 className='text-lg font-bold '>JBL Music Speaker</h2>
                    <div className=''>
                      <p className='text-slate-500 text-sm '>
                        Weekend Discount
                      </p>  
                      <span className='font-bold text-lg text-orange-500 me-2'>$139.99</span>
                      <span className='text-sm text-gray-500 line-through'>$179.99</span>
                    </div>
  
                </div>
                <div className='w-1/2'>
                  <img className='object-fit' src='https://www.pngmart.com/files/15/JBL-Audio-Speakers-Download-PNG-Image.png'></img>
                </div>
              </div>
              
              <div className='bg-slate-100 flex'>
                <div className='w-1/2 h-full flex flex-col justify-around ps-5 '>
                    <h2 className='text-lg font-bold '>Apple AirPods Pro</h2>
                    <div >
                      <p className='text-slate-500 text-sm '>
                        Weekend Discount
                      </p>  
                      <span className='font-bold text-lg text-orange-500 me-2'>$139.99</span>
                      <span className='text-sm text-gray-500 line-through'>$179.99</span>
                    </div>

                </div>
                <div className='w-1/2'>
                  <img className='object-fit' src='https://assets.stickpng.com/images/60b79e8771a1fd000411f6be.png'></img>
                </div>
              </div>
              
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
              
        
        {/* Highlighted  products section*/}
        <div className='mt-12 '>
          <div className='grid grid-cols-1 gap-4 min-h-[500px] md:grid-cols-3'>

            {/* Deal of the day product */}
            <div className='bg-gray-100 flex flex-col gap-4 p-4 py-10 md:row-span-2 md:col-span-2 md:flex-row'>
                <div className='bg-green-500 min-h-[200px]  md:w-1/2 '>
                    {/* Image here */}
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

        
        {/* Some Products */}
        
        <div className='mt-12'>
          <div className='flex items-center gap-4 '>
            <h2 className='font-bold text-xl py-4 '>Computers & accessories</h2>
            <a href='#' className='text-orange-500 font-light '>show more</a>
          </div>
          <div className='grid grid-cols-1 p-4 min-h-[250px] [&>div]:min-h-[220px] bg-slate-100 gap-4 md:grid-cols-4'>
            <div className='bg-red-500 '></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            
          </div>
        </div>

                <div className='mt-12'>
          <div className='flex items-center gap-4 '>
            <h2 className='font-bold text-xl py-4 '>Cell phones</h2>
            <a href='#' className='text-orange-500 font-light '>show more</a>
          </div>
          <div className='grid grid-cols-1 p-4 min-h-[250px] [&>div]:min-h-[220px] bg-slate-100 gap-4 md:grid-cols-4'>
            <div className='bg-red-500 '></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            <div className='bg-red-500'></div>
            
          </div>
        </div>
          

      </div>
        
      
    </DefaultLayout>
  )
}

export default Homepage