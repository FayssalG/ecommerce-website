import React from 'react'
import Header from './partials/Header/Header'
import Footer from './partials/Footer/Footer'

function DefaultLayout({children}) {
  return (
      <div className='container w-full px-2 mx-auto md:w-[80vw]'>
          <Header/>
          {children}
          <Footer/>

      </div>
  )
}

export default DefaultLayout