/*handles state rlated to the products list 
it takes the initial prroducts list and stores it in a state 

provides the productsList state to the ProductsList component
provides sorting and filtering functions to useSort , useFilters
*/

'use client'

import { getProducts } from "@/lib/sanity";
import { useState , useContext , createContext, useEffect } from "react";


const ProductsCatalogueContext = createContext()

export function useProductsCatalogue(){
    return useContext(ProductsCatalogueContext)
}

export default function ProductsCatalogueProvider({children , products}){
 
    const [productsList , setProductsList ] = useState(products )
    const [sortBy , setSortBy] = useState('')
    const [currentPage , setCurrentPage] = useState(1)
    
    //Sort By Change
    useEffect(()=>{
        sortProducts()
    },[sortBy])

    const handleChangeSortBy = (e)=>{
        setSortBy(e.target.value)
    }
    //////

    //current Page Change
    useEffect(()=>{
        if(currentPage != 1) getMoreProducts()
    
    },[currentPage])
    const handleChangeCurrentPage = ()=>{
        setCurrentPage(prev=>prev+1)
    }

    /////



    function sortProducts(){
        if(!sortBy) return
        const newProductsList = [...productsList]
        switch(sortBy){
            case 'price asc':
                newProductsList.sort((a , b)=>b.price - a.price)
                setProductsList(newProductsList)
                break;
            case 'price desc':
                console.log(sortBy)
                newProductsList.sort((a , b)=>a.price - b.price)
                setProductsList(newProductsList)
                break;
            default :
                return 
        }    
    }

    function getMoreProducts(){
        getProducts(null , currentPage , sortBy)
        .then((moreProducts)=>{
            console.log(moreProducts)
            setProductsList((prev)=>[...prev , ...moreProducts])
        })
        .catch((e)=>{
            console.log(e)
        })
    }


    return (
        <ProductsCatalogueContext.Provider value={{productsList , sortBy , handleChangeSortBy , handleChangeCurrentPage}}>
            {children}
        </ProductsCatalogueContext.Provider>

    )
}