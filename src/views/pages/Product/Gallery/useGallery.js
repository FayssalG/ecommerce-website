import { useEffect, useRef , useState } from "react";

export default function useGallery(){
    useEffect(()=>{
        setIsMobileView(()=>window.matchMedia('(max-width:769px)'))
        const mediaQuery = window.matchMedia('(max-width: 769px)')
        mediaQuery.addEventListener('change' , (e)=>{
            if(e.matches) setIsMobileView(true)
            else setIsMobileView(false)       
        })
    },[])

    const slideRef = useRef(null)
    const [showScrollBtn , setShowScrollBtn] = useState({right:true , left:false})
    const [isMobileView  , setIsMobileView] = useState(false)
    

    function scrollRight(){
      if(slideRef.current){
          const slideElement = slideRef.current
          slideElement.scrollTo({
              behavior : 'smooth',
              left : slideElement.scrollLeft + slideElement.clientWidth
          })
  
      
          if(Math.ceil(slideElement.scrollLeft)+slideElement.clientWidth >= slideElement.scrollWidth-slideElement.clientWidth){
              setShowScrollBtn((prev)=>{return {...prev , right:false}})
          }
  
          setShowScrollBtn((prev)=>{return {...prev , left:true}})
  
      }
    }
  
    function scrollLeft(){
      if(slideRef.current){
        const slideElement = slideRef.current
          slideElement.scrollTo({
              behavior : 'smooth',
              left : slideElement.scrollLeft - slideElement.clientWidth
          })
          if(Math.floor(slideElement.scrollLeft)-slideElement.clientWidth <= 0){
              setShowScrollBtn((prev)=>{return{...prev , left:false}})
          }
          setShowScrollBtn((prev)=>{return {...prev , right:true} })
  
      }
    }
  

    return{
        slideRef, scrollLeft , scrollRight , showScrollBtn , isMobileView
    }
}