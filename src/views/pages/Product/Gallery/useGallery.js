import { useEffect, useRef , useState } from "react";

export default function useGallery(){
    useEffect(()=>{
        if(slideRef.current && (slideRef.current.clientWidth < slideRef.current.scrollWidth)){
            setShowScrollBtn({right:true , left:false})
        }
    },[])

    const slideRef = useRef(null)
    const [showScrollBtn , setShowScrollBtn] = useState({right:false , left:false})
    
    const [swiper , setSwiper] = useState(null)
    const [activeThumbnail , setActiveThumbnail] = useState(0)
    const slideTo = (index)=>{
        swiper?.slideTo(index)
        setActiveThumbnail(index)
    }

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
        slideRef, scrollLeft , scrollRight , showScrollBtn 
        ,setSwiper, activeThumbnail,slideTo    }
}