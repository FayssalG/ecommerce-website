import { useEffect, useRef } from "react"
import { useState } from "react"
export default function useDescription(){
    const [isOpen , setIsOpen] = useState(false)
    const [showReadMoreBtn , setShowReadMoreBtn] = useState(false)
    const paragraphRef = useRef(null)

    useEffect(()=>{
        if(paragraphRef.current){
            let element = paragraphRef.current
            setShowReadMoreBtn(element.clientHeight !== element.scrollHeight)
        }
    },[])

    return {
        isOpen,
        setIsOpen,
        showReadMoreBtn,
        setShowReadMoreBtn,
        paragraphRef
    }
}