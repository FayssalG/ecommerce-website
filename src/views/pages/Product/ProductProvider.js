'use client'
import { useContext , createContext , useState , useEffect} from "react"
import { useCartContext } from "@/views/providers/CartProvider"

const ProductContext = createContext()

export function useProduct(){
    return useContext(ProductContext)
}

export default function ProductProvider({children}){
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

    return (
        <ProductContext.Provider value={{quantity,  increaseQuantity , decreaseQuantity , addProductToCart}}>
            {children}
        </ProductContext.Provider>
    )
}    