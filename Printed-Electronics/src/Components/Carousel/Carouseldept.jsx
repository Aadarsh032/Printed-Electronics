import React, { useEffect, useRef ,useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carouseldept.css'
import departmentfacility from '../../assets/department_facility'

export function Carouseldept() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])


  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
         {departmentfacility.map((pictures,index)=>{
              return(   <div className="embla__slide" key={index} >
                <img  className='embla__slide-img' src={pictures.image} alt="" />
                <br />
                <hr />
                 <h1 className='embla__slide-name'>{pictures.name}</h1>
                </div>
              )
         })}
      </div>
       <a href="https://msme.iith.ac.in/Facilities/" target='_blank'><button className='explore-button'><p>EXPLORE MORE</p></button></a>

    </div>
  )
}
