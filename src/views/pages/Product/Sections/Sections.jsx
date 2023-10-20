'use client'
import React from 'react'
import useSections from './useSections'
export default function Sections({description , specs}) {


 const {sections , activeSection , activeComponent, handleChangeActiveSection} = useSections(description ,specs)
 
 
 return (
    <>
         <div className='relative min-h-[150px] flex flex-col gap-5 lg:flex-row '>
            {
                sections.map((section , index)=>{
                    return (
                    <>   
                        <div >
                            <button
                                className='text-xl p-2 w-full bg-slate-100 rounded border-b lg:rounded-none lg:bg-transparent'
                                style={{borderColor: activeSection == section.name ? 'cyan' : 'transparent'}}
                                onClick={handleChangeActiveSection}
                                data-section={section.name}
                            >{section.name}</button>
                        </div>
                        <div className='lg:absolute lg:top-10' style={{display : activeSection == section.name ? 'block' : 'none'}}>
                            {section.component}
                        </div>
                       
                    </>
                    )
                })
            }

        </div>

        {/* Details (Descriptio) */}
        {/* <div className=' mt-10 rounded lg:me-20'>
            <Description/>
        </div> */}

        {/* Specs */}
        {/* <div className='mt-5 rounded lg:me-20'>
            <Specs specs={product?.specs}/>
        </div> */}

        {/* Customers reviews */}
        {/* <div className='bg-slate-100 py-2 px-4 mt-4 rounded lg:me-20'>
            <h2 className='text-xl font-light'>Reviews</h2>                
        </div> */}
    </>
  )
}
