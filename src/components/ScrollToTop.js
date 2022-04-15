import React from 'react';
import { useState, useEffect } from 'react';

// Import React icon
import { IoMdArrowDropupCircle } from 'react-icons/io';

const ScrollToTop = () => {
    
    const [scrollToTop, setScrollToTop] = useState(false);

    function setScrollPos(){
        if(window.scrollY > 200) {
            setScrollToTop(true)
        }else {
            setScrollToTop(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", setScrollPos)

         return () => window.removeEventListener('scroll', setScrollPos);

    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

  return (
    <div className="scroll-to-top">

        {scrollToTop && (
            <IoMdArrowDropupCircle size={50} onClick={scrollUp}/>
        )}
        
    </div>
  )
}

export default ScrollToTop;