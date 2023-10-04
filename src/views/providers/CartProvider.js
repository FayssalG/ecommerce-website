//Provides the cart state to any component down the tree

'use client'

import { useContext, useReducer, useState } from "react";
import { createContext} from "react";


const CartContext = createContext()
export function useCartContext(){
    return useContext(CartContext)
}


function cartReducer(state ,{type , payload}){
    switch(type) {
        case 'add-item' :
            if(state.find((product)=>product.title === payload.title)) return state
            return  [...state , {...payload , quantity:1}]
            break;
        case 'remove-item' :
            return state.filter((product)=>product.title !== payload.title)
            break;
        case 'increase-quantity':
            return state.map((product)=>{
                if(product.name == payload.name){
                    return {...product , quantity:product.quantity+1}
                }
            })
            break;
        case 'decrease-quantity':
            return state.map((product)=>{
                if(product.name == payload.name){
                    return {...product , quantity:product.quantity-1}
                }
        
            })
            break;
        default :
            return state
    }
}

export default function CartProvider({children}){
    const [showCart , setShowCart] = useState(false)
    const [cartItems , dispatch] = useReducer(cartReducer , [])  
    const totalAmount = cartItems.reduce((total , item)=>{return total+(item.price*item.quantity)} , 0).toFixed(2)
    
    function handleToggleCart(){
        setShowCart(!showCart)
    }

    const value = {
        totalAmount,
        showCart,
        cartItems,
        handleToggleCart,
        dispatch
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

} 