import { useState , useMemo } from "react";

import Specs from './Specs/Specs'
import Description from './Description/Description'

export default function useSections(description , specs){
    const [activeSection , setActiveSection] = useState('description')
    function handleChangeActiveSection(e){
        if(e.target) setActiveSection(e.target.dataset.section)
    }
    const sections = [
        {name : 'description' , component:<Description/> } ,
        {name : 'specifications' , component:<Specs specs={specs} />}
    ]
    
    const activeComponent = useMemo(()=>{
        switch(activeSection){
            case 'specifications' :
                return <Specs specs={specs} />
            case 'description' :
                return <Description/> 
            default : 
                return
        }
    
     },[activeSection])

    return {activeComponent, sections, activeSection , handleChangeActiveSection}
}