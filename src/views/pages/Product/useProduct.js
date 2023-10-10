//Manages the states and helper fuctions related to the Product component  
'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { useCartContext } from '@/views/providers/CartProvider'

export default function useProduct() {
    const [quantity , setQuantity] = useState(1)    
    const {dispatch } = useCartContext()
    
    useEffect(()=>{
        console.log(quantity)
    })
    function increaseQuantity(){
        setQuantity((prev)=>prev + 1)
    }

    function decreaseQuantity(){
        if(quantity==1) return
        setQuantity((prev)=>prev -1 )
    }

    
    
    const addProductToCart = (item)=>{
        dispatch({type:'add-item' , payload:{...item , quantity : quantity}})
        setQuantity(1)
    }


    return {quantity,  increaseQuantity , decreaseQuantity , addProductToCart }
}
