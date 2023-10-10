
'use client'

import React from 'react'
import {BsCart3 , BsTrash} from 'react-icons/bs'

import { urlForImage } from '../../../../../sanity/lib/image'
import useCart from './useCart'

export default function Cart() {

  const {
    cartBtnRef, 
    showCart,
    handleToggleCart ,

    cartItems , 
    totalAmount , 
    dispatch
  } = useCart()
  
  
  return (
    <div ref={cartBtnRef} className='flex  gap-4 items-center'> 
            <button  onClick={handleToggleCart} className={cartItems.length>0 ? 'cart-btn': ''} data-items-num={cartItems.reduce((total,item)=>total+item.quantity , 0)}><BsCart3 size={30}/></button>
            <div className='&[p]:m-0 '>
              <p className='text-xs text-slate-400'>Total</p>
              <p className='font-bold'>$ {totalAmount}</p>
            </div>
        {   
            showCart &&
            <div className='absolute flex-col flex justify-between bg-white rounded shadow shadow-slate-500 w-full mt-5 min-h-[200px] z-20 top-10 right-0 lg:w-96  '>
              <ul className='flex flex-col gap-2 p-4 py-5 overflow-y-auto min-h-[100px] max-h-[400px]'>
                {cartItems.length == 0 && <p className='text-slate-500 text-center mt-auto'>Cart is Empty</p> } 
                { 
                  cartItems.map((item)=>{
                      return(
                          <li className='border-b-2 border-slate-100 pb-4'>
                            <div className='flex  '>
                                <div className='w-1/2 '>
                                  <img className='mx-auto w-36 h-36 object-contain' src={urlForImage(item.image[0])} ></img>
                                </div>
                      
                                <div className='w-1/2'>
                                  <h2 className=' '>{item.title}</h2>                              
                                  <p className=' text-orange-500 font-bold'>${item.price}</p>
                                  {/* Quantity */}
                                  <div className='mt-2'>
                                      <span className='text-sm text-slate-400'>Quantity : </span>
                                      <div className='shadow shadow-slate-200 rounded  py-1 mt-2 grid grid-cols-3 '>
                                        <button onClick={()=>dispatch({type:'decrease-quantity',payload:item})}>-</button>
                                        <span className='text-center '>{item.quantity}</span>
                                        <button onClick={()=>dispatch({type:'increase-quantity',payload:item})}>+</button>
                                      </div>
                                  </div>
                                </div>

                                <div>
                                  <button className='hover:text-orange-500' onClick={()=>dispatch({type:'remove-item',payload:item})}>
                                    <BsTrash/>
                                  </button>
                                </div>
                            </div>
                          </li>

                      )
                  })
                }
         
              </ul>
       
              <div className='w-full my-2 px-2 '>
                  <button className='bg-orange-500 text-white px-4 py-2 w-full rounded'>Check out</button>
              </div>
            </div>
        }

          </div>
  )
}
