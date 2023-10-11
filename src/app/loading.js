import React from 'react'

import {AiOutlineLoading} from 'react-icons/ai'

export default function Loading() {

  return (
    <div className='w-100 h-[100vh] flex justify-center items-center'>
        <div className='mx-auto  '>
            <AiOutlineLoading size={35} className='animate-spin' color='orange '/>
        </div>
    </div>
    
  )

}
