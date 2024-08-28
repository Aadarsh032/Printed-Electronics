import React from 'react'
import './ResearchFacility.css'
import EmblaCarousel from '../EmblaCarousel/EmblaCarousel'
import '../EmblaCarousel/embla.css'

import { lab_device_list } from '../../assets/research_facility'
import { Carouseldept } from '../Carousel/Carouseldept'

import background3 from '../../assets/IIT-H5.jpg'




const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const ResearchFacility = () => {
  return (
    <>
    <div  className='labfacility'>
      <div className='labfaility-top'>
        <img className='labfaility-top-image' src={background3} alt="" />
        <h1 className='labfacility-main-heading'>Research Facilities</h1>
      </div>
          <h1 className='labfacility-main-heading-dept'>Lab Facilities <hr className='heading-underline' /></h1>
         <div className='labfacility-mainbox'>
            {
               lab_device_list.map((item,index)=>{
                    return(
                      <div className='lab-facility-box' key={index}>
                        <div className='lab-facility-box-img-box'>
                           <img className='lab-facility-box-img' src={item.device} alt=''></img>
                           </div>
                           <div className='lab-facility-textbox'>
                             <h1 className='lab-facility-textbox-heading'><u>{item.device_name}</u></h1>
                             <p className='lab-facility-textbox-description'>{item.device_description}</p>
                           </div>
                      </div>
                        )
                })
            }
         </div>
    </div>

    <div className='departmentfacility'>
    <h1 className='labfacility-main-heading-dept'>Department Facilities <hr className='heading-underline' /></h1>
    <Carouseldept/>
    </div>
    
   
    </>
  )
}

export default ResearchFacility;