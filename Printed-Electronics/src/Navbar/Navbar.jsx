import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo2 from '../assets/logo2.png'
import menu_close from '../assets/menu_close.svg'
import menu_open from '../assets/menu_open.svg'
import University_Logo from '../assets/University Logo.jpeg'
import {Link} from 'react-router-dom'

const Navbar = () => {
   
   const [state,setState] = useState("Home");

   const menuRef=useRef();
   
   const openMenu= ()=>{
     menuRef.current.style.right="0";
   }
   const closeMenu = () => {
     menuRef.current.style.right ="-390px";
   }

  return (
    <div className='navbar'>
       <div className='navbar-upperrightdiv'><Link className='linktag' to='/Home'><img className='group-logo' src={logo2} alt="" onClick={()=>{setState("Home")}} /></Link></div>
       <img src={menu_open} onClick={()=>{openMenu()}} alt="" className='nav-mob-open' />
      <ul  ref={menuRef} className='navbar-pages' >
      <img src={menu_close} onClick={()=>{closeMenu()}} alt="" className='nav-mob-close' />
        <li><Link className='linktag' to='/Home' onClick={()=>{setState("Home")}}> Home {state=="Home"?<hr className='nav-hr' />:<></>} </Link></li>
        <li><Link className='linktag' to='/About' onClick={()=>{setState("AboutUs")}}>About Us {state=="AboutUs"?<hr className='nav-hr' />:<></>}</Link>  </li>
        <li> <Link className='linktag' to='/PublishedPapers' onClick={()=>{setState("PublishedPapers")}}>Published Papers {state=="PublishedPapers"?<hr className='nav-hr' />:<></>}</Link></li>
        <li> <Link className='linktag' to='/ResearchFacility' onClick={()=>{setState("ResearchFacilities")}}>Research Facilities {state=="ResearchFacilities"?<hr className='nav-hr' />:<></>}</Link></li>
        <li> <Link className='linktag' to='/OurTeam' onClick={()=>{setState("OurTeam")}}>Our Team {state=="OurTeam"?<hr className='nav-hr'/>:<></>}</Link></li>
        <li> <Link className='linktag' to='/NewsUpdates' onClick={()=>{setState("News&Updates")}}>News & Updates {state=="News&Updates"?<hr className='nav-hr'/>:<></>}</Link></li>
        <p id='contactbuttonhid'> <Link className='linktaghid' to='/ContactUs' onClick={()=>{setState(null)}}>Contact Us</Link></p>
      </ul>
      <p id='contactbutton'> <Link className='linktag' to='/ContactUs' onClick={()=>{setState(null)}}>Contact Us</Link></p>
    </div>
  )
}

export default Navbar