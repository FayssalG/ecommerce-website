import { useEffect, useReducer, useRef, useState } from "react";

const PREFIX = 'app-'

export default function useLocalStorageReducer(key  , reducer,initialState){
    const [value , dispatch] = useReducer(reducer , initialState)
    const isMounted = useRef(false)

    useEffect(()=> {
        const jsonData = localStorage.getItem(PREFIX+key)
        if(jsonData){
            dispatch({type:'initial-value',payload:JSON.parse(jsonData)})
        }
        return ()=>{ isMounted.current = false }        
    },[key])

    useEffect(()=>{
        if(isMounted.current) {
            localStorage.setItem(PREFIX+key , JSON.stringify(value))
        }else{
            isMounted.current = true
        }
    },[value , key])

    return [value , dispatch]
}