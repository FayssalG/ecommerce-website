/*handles state rlated to the products list 
it takes the initial prroducts list and stores it in a state 

provides the productsList state to the ProductsList component
provides sorting and filtering functions to useSort , useFilters
*/

'use client'

import { getProducts,getBrands} from "@/lib/sanity";
import { useParams, useSearchParams } from "next/navigation";
import { useState , useContext , createContext, useEffect, useMemo, useCallback } from "react";


const ProductsCatalogueContext = createContext()

export function useProductsCatalogue(){
    return useContext(ProductsCatalogueContext)
}




export default function ProductsCatalogueProvider({children , products }){
    const {category} = useParams() //To get the category from the URL
    const searchParams = useSearchParams() //To get the quety string 

    const [productsList , setProductsList ] = useState(products )
    const [showMoreBtn , setShowMoreBtn] = useState(true)
    const [loading , setLoading] = useState(false)
    
    const [checkedBrands , setCheckedBrands] = useState([])
    const [sortBy , setSortBy] = useState('')
    const [currentPage , setCurrentPage] = useState(1)
    

    
    //Change SortBy

    const handleChangeSortBy = (e)=>{
        setSortBy(e.target.value)
    }

    const sortProducts = useCallback(()=>{
        if(!sortBy) return
        const newProductsList = [...productsList]
        switch(sortBy){
            case 'price asc':
                newProductsList.sort((a , b)=>a.price - b.price)
                setProductsList(newProductsList)
                break;
            case 'price desc':
                console.log(sortBy)
                newProductsList.sort((a , b)=>b.price - a.price)
                setProductsList(newProductsList)
                break;
            default :
                return 
        }    
    },[sortBy ])

    useEffect(()=>{
        sortProducts()
    },[ sortProducts])

    //////

    
    //get more Products

    const handleChangeCurrentPage = ()=>{
        setCurrentPage(prev=>prev+1)
    }

    
    const getMoreProducts = useCallback(()=>{
        const q = searchParams.get('q')
        setLoading(true)

        getProducts(category, q , currentPage , sortBy , checkedBrands)
        .then((moreProducts)=>{
            if(moreProducts.length ==0){
                setShowMoreBtn(false)
                return
            }  
            const newProductsList= [...products , ...moreProducts]
            switch(sortBy){
                case 'price asc':
                    newProductsList.sort((a , b)=>a.price - b.price)
                    break;
                case 'price desc':
                    newProductsList.sort((a , b)=>b.price - a.price)
                    break;
                default :
                    break; 
            }
            setProductsList(newProductsList)
        })
        .catch((e)=>{
            console.log(e)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[currentPage])

    useEffect(()=>{
        if(currentPage > 1) getMoreProducts()
    },[getMoreProducts])

    //Change checked brands

    const handleChangeCheckedBrands = (newBrand)=>{
        if(checkedBrands.includes(newBrand)){
            setCheckedBrands((prev)=>prev.filter((b)=>b!=newBrand))
        } else{
            setCheckedBrands((prev)=>[...prev , newBrand])
        }
    }

    
    //Filter products
    const  getFilteredProducts = useCallback(()=>{
        const q = searchParams.get('q')
        setLoading(true)
        getProducts(category, q , null , sortBy , checkedBrands)
        .then((newProducts)=>{
            setProductsList(newProducts)
        })
        .catch((e)=>{
            console.log(e)
        })
        .finally(()=>{
            setLoading(false)
        })
    
    },[checkedBrands])

    useEffect(()=>{
        getFilteredProducts()
    },[checkedBrands , getFilteredProducts])

    const filteredProductsList = useMemo(()=>{
        return productsList
    },[ productsList])

    return (
        <ProductsCatalogueContext.Provider value={{filteredProductsList, loading , showMoreBtn , sortBy , handleChangeSortBy , handleChangeCurrentPage , handleChangeCheckedBrands}}>
            {children}
        </ProductsCatalogueContext.Provider>

    )
}