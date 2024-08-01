import React, { useState } from 'react'
import './Navbar.css'
import logo2 from '../assets/logo2.png'
import University_Logo from '../assets/University Logo.jpeg'
import {Link} from 'react-router-dom'

const Navbar = () => {
   
   const [state,setState] = useState("Home");

  return (
    <div className='navbar'>
       <div className='navbar-upperrightdiv'><Link className='linktag' to='/Home'><img className='group-logo' src={logo2} alt="" onClick={()=>{setState("Home")}} /></Link></div>
      {/* <div className='upperdiv'>
      <div className='navbar-upperleftdiv'> <img src={University_Logo} alt="" className='university-logo' /></div> 
      </div> */}
      <ul className='navbar-pages' >
        <li><Link className='linktag' to='/Home' onClick={()=>{setState("Home")}}> Home {state=="Home"?<hr className='nav-hr' />:<></>} </Link></li>
        <li><Link className='linktag' to='/About' onClick={()=>{setState("AboutUs")}}>About Us {state=="AboutUs"?<hr className='nav-hr' />:<></>}</Link>  </li>
        <li> <Link className='linktag' to='/PublishedPapers' onClick={()=>{setState("PublishedPapers")}}>Published Papers {state=="PublishedPapers"?<hr className='nav-hr' />:<></>}</Link></li>
        <li> <Link className='linktag' to='/ResearchFacility' onClick={()=>{setState("ResearchFacilities")}}>Research Facilities {state=="ResearchFacilities"?<hr className='nav-hr' />:<></>}</Link></li>
        <li> <Link className='linktag' to='/OurTeam' onClick={()=>{setState("OurTeam")}}>Our Team {state=="OurTeam"?<hr className='nav-hr'/>:<></>}</Link></li>
        <li> <Link className='linktag' to='/NewsUpdates' onClick={()=>{setState("News&Updates")}}>News & Updates {state=="News&Updates"?<hr className='nav-hr'/>:<></>}</Link></li>
      </ul>
      <p id='contactbutton'> <Link className='linktag' to='/ContactUs' onClick={()=>{setState(null)}}>Contact Us</Link></p>
    </div>
  )
}

export default Navbar