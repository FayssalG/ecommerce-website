/*handles state rlated to the products list 
it takes the initial prroducts list and stores it in a state 

provides the productsList state to the ProductsList component
provides sorting and filtering functions to useSort , useFilters
*/

'use client'

import { getProducts, getProductsByCategory , getBrands} from "@/lib/sanity";
import { useParams, useSearchParams } from "next/navigation";
import { useState , useContext , createContext, useEffect, useMemo } from "react";


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
    useEffect(()=>{
        sortProducts()
    },[sortBy])

    const handleChangeSortBy = (e)=>{
        setSortBy(e.target.value)
    }

    function sortProducts(){
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
    }

    //////

    
    //get more Products
    useEffect(()=>{
        if(currentPage != 1) getMoreProducts()
    },[currentPage])

    const handleChangeCurrentPage = ()=>{
        setCurrentPage(prev=>prev+1)
    }

    
    function getMoreProducts(){
        const q = searchParams.get('q')
        setLoading(true)
        if(category){
            getProductsByCategory(category, q , currentPage , sortBy , checkedBrands)
            .then((moreProducts)=>{
                setProductsList((prev)=>[...prev , ...moreProducts])
                setLoading(false)
                if(moreProducts.length ==0) setShowMoreBtn(false) 
            })
            .catch((e)=>{
                console.log(e)
                setLoading(false)
            })

        }
        else{
            getProducts(q , currentPage , sortBy , checkedBrands)
            .then((moreProducts)=>{
                setProductsList((prev)=>[...prev , ...moreProducts])
                setLoading(false)
                if(moreProducts.length ==0) setShowMoreBtn(false) 
            })
            .catch((e)=>{
                console.log(e)
                setLoading(false)
            })
        }
       
    }


    //Change checked brands

    const handleChangeCheckedBrands = (newBrand)=>{
        if(checkedBrands.includes(newBrand)){
            setCheckedBrands((prev)=>prev.filter((b)=>b!=newBrand))
        } else{
            setCheckedBrands((prev)=>[...prev , newBrand])
        }
    }

    
    //Filter products
    function getFilteredProducts(){
        const q = searchParams.get('q')
        setLoading(true)
        if(category){
            getProductsByCategory(category, q , null , sortBy , checkedBrands)
            .then((newProducts)=>{
                setProductsList(newProducts)
                setLoading(false)
            })
            .catch((e)=>{
                console.log(e)
                setLoading(false)
            })
        }
        else{
            getProducts(q , null , sortBy , checkedBrands)
            .then((newProducts)=>{
                setProductsList(newProducts)
                setLoading(false)
            })
            .catch((e)=>{
                console.log(e)
                setLoading(false)
            })
        }
        
    }

    useEffect(()=>{
        getFilteredProducts()
    },[checkedBrands])

    const filteredProductsList = useMemo(()=>{
        return productsList
    },[ productsList])

    return (
        <ProductsCatalogueContext.Provider value={{filteredProductsList, loading , showMoreBtn , sortBy , handleChangeSortBy , handleChangeCurrentPage , handleChangeCheckedBrands}}>
            {children}
        </ProductsCatalogueContext.Provider>

    )
}