import React from 'react'

export default function Specs({specs}) {
  if(!specs) return
  return (
    <>
    {/* <h2 className='text-xl font-light'>Specifications</h2> */}
        
        <table className='my-5 table-fixed w-full'>
            <tbody className='[&>tr>td]:border-2 [&>tr>td]:p-2'>
                {
                    specs.map((spec , index)=>{
                        return(
                            <tr key={index}>
                                <td className=''>{spec.key}</td>
                                <td className='font-light'>{spec.value}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    </>
  )
}
