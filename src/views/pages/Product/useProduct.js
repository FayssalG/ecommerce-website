//Manages the states and helper fuctions related to the Product component  

import React, { useState } from 'react'
import { useCartContext } from '@/views/providers/CartProvider'

export default function useProduct() {
    const [quantity , setQuantity] = useState(1)    
    const {dispatch } = useCartContext()

    function increaseQuantity(){
        setQuantity(quantity + 1)
    }

    function decreaseQuantity(){
        if(quantity==0) return
        setQuantity(quantity -1 )
    }

    function addProductToCart(item){
        dispatch({type:'add-item' , payload:{...item , quantity}})
        setQuantity(1)
    }


    return {quantity,  increaseQuantity , decreaseQuantity , addProductToCart }
}
