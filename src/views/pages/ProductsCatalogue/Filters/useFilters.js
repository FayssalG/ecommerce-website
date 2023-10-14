import { useState , useReducer} from "react"
export default function useFilters(){
    const [isFilter , dispatch] = useReducer(reducer , {category : true , brand:false})
 
    function reducer(state , {type}){
        switch(type){
            case 'category' : 
                return {...state , category:!state.category}
            case 'brand':
                return {...state , brand:!state.brand}
            default :
                return state
        }
    }
    
    
    const handleShowFilter = (e)=>{
        dispatch({type : e.target.dataset.filtertype})

    }


    const {category:isFilterCategory , brand:isFilterBrand} = isFilter    

    return {
        isFilterCategory,
        isFilterBrand,
        handleShowFilter
    }
}