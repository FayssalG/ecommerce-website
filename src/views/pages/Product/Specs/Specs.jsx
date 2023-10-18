import React from 'react'

export default function Specs({specs}) {
  if(!specs) return
  return (
    <div className='py-2 px-4 bg-slate-100 mt-5 rounded lg:me-20'>
        <h2 className='text-xl font-light'>Specifications</h2>
        
        <table className='mt-5 table-fixed w-full'>
            <tbody className='[&>tr>td]:border-2 [&>tr>td]:p-2'>
                {
                    specs.map((spec)=>{
                        return(
                            <tr>
                                <td className=''>{spec.key}</td>
                                <td className='font-light'>{spec.value}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}
