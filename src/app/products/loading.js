import React from 'react'

import {AiOutlineLoading} from 'react-icons/ai'

export default function Loading() {

  return (
    <div className='absolute left-0 top-0 w-full h-full flex justify-center items-center'>
        <div className='mx-auto  '>
            <AiOutlineLoading size={35} className='animate-spin' color='orange '/>
        </div>
    </div>
    
  )

}
