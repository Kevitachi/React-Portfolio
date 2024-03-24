import React, { useEffect } from 'react'
import { useState } from 'react'
import './Scroll_to_Top.css'
import arrow from  '../../images/arrow.gif'
function Scroll_to_Top() {

  const [showButton, setShowButton] = useState(false)
  useEffect(() =>{
    const handleScroll= ()=>{
       const windowHeight = window.innerHeight;
       const documentHeight= document.documentElement.scrollHeight;
       const scrollPos= window.scrollY;

       if(scrollPos+windowHeight>= documentHeight){
        setShowButton(true);
       }else{
        setShowButton(false);
       }

    }
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },
  [])

  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'   
     })
  }

  return (
    <button className={`Scroll_to_Top ${showButton ? 'show': 'hide'}`} 
    onClick={scrollToTop}
    >
      
      
       <img width={20} src={arrow} style={{ width: '40px', height: '40px' }}/>

    </button>
  )
}

export default Scroll_to_Top