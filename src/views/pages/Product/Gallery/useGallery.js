import { useRef , useState } from "react";

export default function useGallery(){

    const slideRef = useRef(null)
    const [showScrollBtn , setShowScrollBtn] = useState({right:true , left:false})
     
    function scrollRight(){
      if(slideRef.current){
          const slideElement = slideRef.current
          slideElement.scrollTo({
              behavior : 'smooth',
              left : slideElement.scrollLeft + 200
          })
  
      
          if(Math.ceil(slideElement.scrollLeft)+200 >= slideElement.scrollWidth-slideElement.clientWidth){
              setShowScrollBtn((prev)=>{return {...prev , right:false}})
          }
  
          setShowScrollBtn((prev)=>{return {...prev , left:true}})
  
      }
    }
  
    function scrollLeft(){
      if(slideRef.current){
          slideRef.current.scrollTo({
              behavior : 'smooth',
              left : slideRef.current.scrollLeft - 200
          })
          if(Math.floor(slideRef.current.scrollLeft)-200 <= 0){
              setShowScrollBtn((prev)=>{return{...prev , left:false}})
          }
          setShowScrollBtn((prev)=>{return {...prev , right:true} })
  
      }
    }
  

    return{
        slideRef,scrollLeft , scrollRight , showScrollBtn
    }
}