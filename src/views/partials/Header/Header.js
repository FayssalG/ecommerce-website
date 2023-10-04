import React from 'react'
import './Header.css';
import {BsCart3} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

function Header() {
  return (
    <header className=''>
      <div className='flex flex-col justify-between gap-4  py-4 md:flex-row md:items-center '>
        {/* logo */}
        <div className=''>
          <h1 className='text-2xl font-bolder'>ELe.Mart</h1>  
        </div>

        {/* Search bar */}
        <from >

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
        <div className='flex gap-2 items-center '>
          <button className='fav-btn mr-6' data-items-num='2'><AiOutlineHeart  size={30}/></button>
          
          <button className='cart-btn' data-items-num='2'><BsCart3 size={30}/></button>
          <div className='&[p]:m-0'>
            <p className='text-xs text-slate-400'>Total</p>
            <p className='font-bold'>100.00 $ </p>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header