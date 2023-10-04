//contains state management logic for the ProductMisting component 

import React , {useReducer, useState} from 'react'

function reducer(state , {type}){
    switch(type){
        case 'category' : 
            return {...state , category:!state.category}
        case 'brand':
            return {...state , brand:!state.brand}
    }
}

import { products as productsList} from './dummyData'
export default function useProductListing() {
    const [isFilter , dispatch] = useReducer(reducer , {category : false , brand:false})
    const [products , setProducts ] = useState(productsList)
    
    const handleShowFilter = (e)=>{
        dispatch({type : e.target.dataset.filtertype})
    }

    const isFilterCategory = isFilter.category    
    const isFilterBrand = isFilter.brand



    return {
        products,
        handleShowFilter,
        isFilterCategory,
        isFilterBrand   
    }
    
}