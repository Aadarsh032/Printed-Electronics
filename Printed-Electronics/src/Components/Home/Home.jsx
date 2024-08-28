import React from 'react'
import './Home.css'
import background3 from '../../assets/20221013_175819.jpg'
import logo2 from '../../assets/logo2.jpg'
import HomeCarousel from '../HomeCarousel/HomeCarousel'


const Home = () => {
  return (
    <>
      <div className='homepage'>
    
        <img src={background3} alt=""  className='background_video' />
        <div className='homepage-content'>
          <div className='homepage-content-text' >
          <h1 className='homepage-content-heading'>Printed Electronics Group</h1>
          <p className='homepage-content-paragraph'>
            <hr className='homepage-content-line' />Department of MSME, IIT Hyderabad<hr className='homepage-content-line' /></p>
          <img className='logoimg' src={logo2} style={{width:"200px"}} />
          </div>
               <HomeCarousel/>
        </div>
      </div>
    </>
  )
}

export default Home