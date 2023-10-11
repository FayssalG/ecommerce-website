import { useRef, useState } from "react";


export default function useSearchbar(){
    const inputRef = useRef(null)
    const selectRef = useRef(null)
    const [query , setQuery] = useState(null)

    function handleChangeQuery(){
        if(inputRef.current){
            setQuery(inputRef.current.value)
        }
        
    }
    console.log(query)
    return {query ,handleChangeQuery  , inputRef , selectRef}
}