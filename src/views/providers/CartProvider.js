//Provides the cart state to any component down the tree

'use client'

import { useContext, useReducer, useState } from "react";
import { createContext} from "react";
import useLocalStorageReducer from "./useLocalStorageReducer";


const CartContext = createContext()
export function useCartContext(){
    return useContext(CartContext)
}


function cartReducer(state ,{type , payload}){
    switch(type) {
        case 'initial-value' : 
            return payload
            break;
        case 'add-item' :
            //if product was add from the listing page
            if(!payload.quantity){
                if(state.find((product)=>product.title === payload.title )) return state
                return  [...state , {...payload , quantity: 1}]
            }

            //if product was added from the product page and the cart is empty
            if(state.length == 0 ) return [...state , payload]
            //if product was added from the product page
            return  state.map((product)=>{
                if(product.title == payload.title) {
                    return {...product , quantity : product.quantity + payload.quantity }
                }
                return product
            })
            
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
    
    const [cartItems , dispatch] = useLocalStorageReducer('cart' , cartReducer , [])  
    const totalAmount = cartItems?.reduce((total , item)=>{return total+(item.price*item.quantity)} , 0).toFixed(2)
    

    const value = {
        totalAmount,
        cartItems,
        dispatch,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

} 