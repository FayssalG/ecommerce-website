import React from 'react'
import './Header.css';
import Cart from './Cart/Cart';

import Link from 'next/link';
import {AiOutlineHeart} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import Searchbar from './Searchbar/Searchbar';

function Header() {
  return (
    <header  className=' '>
      <div className='flex flex-col justify-between gap-4  py-4 lg:flex-row lg:items-center '>
        {/* logo */}
        <div className=''>
          <Link href='/'> <h1 className='text-2xl font-bolder'>ELe.Mart</h1> </Link>  
        </div>

        {/* Search bar */}
      <div>
        <Searchbar/>
      </div>
        

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

      {/* Nav */}
      {/* <div className='pt-4 mt-5 border-t-2'>
            <nav >
              <ul className='flex gap-5 flex-col md:flex-row'>
                <li className='text-slate-500'><Link href='/products'>Cell Phones</Link></li>
                <li className='text-slate-500'><Link href='/'>Computers & accessories</Link></li>
                <li className='text-slate-500'><Link href='/'>Television & Video</Link></li>
                <li className='text-slate-500'><Link href='/'>Smartwatches</Link></li>
              
              </ul>
            </nav>
      </div> */}
    </header>
  )
}

export default Header