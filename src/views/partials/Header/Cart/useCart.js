//manages the cart visibility state (cart items are handeled by the CartProvider)

import { useEffect, useRef , useState } from 'react'
import { useCartContext } from '../../../providers/CartProvider'

export default function useCart() {
    const [showCart , setShowCart] = useState(false)
    
    const cartBtnRef = useRef(null)
    const { cartItems , totalAmount , dispatch } = useCartContext()
      
    useEffect(()=>{
        document.addEventListener('click' , handleClickAway , true)
        return ()=>document.removeEventListener('click' , handleClickAway)
    },[])

    function handleToggleCart(){
        setShowCart(!showCart)
    }

    function handleClickAway(e){
        if(!e.target || !cartBtnRef.current) return
        if(!cartBtnRef.current.contains(e.target)){
            setShowCart(false)
        }
    }

   
    return {
        showCart,
        handleToggleCart ,
        cartBtnRef, 

        cartItems , 
        totalAmount , 
        dispatch

    }

}
