import React from 'react'
import Header from './partials/Header/Header'
import Footer from './partials/Footer/Footer'

import { getCategories } from '@/lib/sanity'

async function DefaultLayout({children}) {
  const categories = await getCategories()
  return (
      <div  className='container w-full px-2 mx-auto lg:w-[80vw]' >
          <Header categories={categories}/>
          {children}
          <Footer/>
      </div>
  )
}



export default DefaultLayout