import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function useSearchbar(){
    const router = useRouter()
    const inputRef = useRef(null)
    const selectRef = useRef(null)

    function handleChangeQuery(e){
        e.preventDefault()
        console.log('test')
        if(inputRef.current && selectRef.current){
            if(inputRef.current.value==null) return
            if(selectRef.current.value=='all') router.push('/products?q='+inputRef.current.value)        
            else router.push(`/products/${selectRef.current.value}?q=${inputRef.current.value}`)        
        }
    }
    return { handleChangeQuery  , inputRef , selectRef}
}