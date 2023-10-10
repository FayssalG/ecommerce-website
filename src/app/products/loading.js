import React from 'react'

import {AiOutlineLoading} from 'react-icons/ai'

export default function Loading() {

  return (
    <div className='w-100 h-[100vh] flex justify-center items-center animate-spin'>
        <AiOutlineLoading size={30} color='orange'/>
    </div>
  )

}
