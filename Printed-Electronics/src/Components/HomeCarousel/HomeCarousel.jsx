import React from 'react'
import './HomeCarousel.css'

// import React, { useEffect, useRef ,useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import departmentfacility from '../../assets/department_facility'

import homedisplay from '../../assets/homedisplay'

const HomeCarousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
    <div className="embla__containerhome">
       {homedisplay.map((pictures,index)=>{
            return(   <div className="embla__slide" key={index} >
                <hr />
              <img  className='embla__home_slide-img' src={pictures.image} alt="" />
              <br />
              <hr />
              </div>
            )
       })}
    </div>
   

  </div>
  )
}

export default HomeCarousel
