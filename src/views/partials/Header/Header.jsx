import React from 'react'
import './Header.css';
import Cart from './Cart/Cart';

import {AiOutlineHeart} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

function Header() {
  return (
    <header >
      <div className='flex flex-col justify-between gap-4  py-4 md:flex-row md:items-center '>
        {/* logo */}
        <div className=''>
          <h1 className='text-2xl font-bolder'>ELe.Mart</h1>  
        </div>

        {/* Search bar */}
        <from className=''>

          <div className='flex flex-col gap-2 border-orange-500 md:flex-row md:gap-0'>
            <input type='text' placeholder='Search for products' className='border-2  h-10 px-4 md:w-96' />

            <select className='border-2 cursor-pointer  border-s-0 h-10  px-2 md:w-26'>
              <option>All Categories</option>
            </select>

            <div className='bg-cyan-500  '>
              <button className='flex justify-center items-center py-1 w-full h-full  md:w-12 '>
                <BiSearch size={24} color='white'/>
              </button>
            </div>
          </div>

        </from>
        

        {/* Cart and fav */}
        <div className='relative  flex gap-5 items-center justify-end'>
          {/* fav */}
          {/* <div className=' flex items-center '>
            <button className='fav-btn ' data-items-num='2'><AiOutlineHeart  size={30}/></button>

            <div className='absolute bg-white rounded shadow shadow-slate-500 w-full h-56 z-20 top-10 md:w-56  md:-left-24'></div>
          </div> */}

          {/* cart */}
          
          <Cart/>
        </div>
        
      </div>
    </header>
  )
}

export default Header