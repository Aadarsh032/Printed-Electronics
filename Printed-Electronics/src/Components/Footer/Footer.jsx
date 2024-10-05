import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    <div className='upper_content'>
      <div className='useful_links'>
        <h2 className='title'>Useful Links</h2>
        <p className='useful_links_content'><a href="https://iith.ac.in/" target='_blank' className='footer_links_underline'>IIT Hyderabad</a></p>
        <p className='useful_links_content'><a href="https://msme.iith.ac.in/" target='_blank' className='footer_links_underline'>Department of MSME</a></p>
        <p className='useful_links_content'><a href="https://iith.ac.in/about/aboutiith/#reach" target='_blank' className='footer_links_underline'>How to Reach IITH</a></p>
      </div>
      <div className='contact'>
      <h2 className='title'>Contact</h2>
        <p className='contact_content'>Dr. <span> </span>SURESH KUMAR GARLAPATI</p>
        <p className='contact_content'>Room: 307, MSME block <br/> Indian Institute of Technology, Hyderabad <br/> Sangareddy-502284,Telangana, India <br/> gsuresh@msme.iith.ac.in </p>
      </div>
      <div className='courtesy'>
      <h2 className='title'>Courtesy</h2>
      <p className='courtesy_content'>Pic Courtesy: Printed Electronics Team </p>
        <p className='courtesy_content'>Website: <a href="https://aadarshportfolio.orangecom.xyz/" target='_blank' className='footer_links'><u>Aadarsh Kumar</u></a></p>
      </div>
      </div>
      <hr />
      <div className='lower_content'>
            <p className='copyright'>Copyright © 2024 - 2026 Printed Electronics. All rights reserved. <br />Last updated on May, 2024 </p>
      </div>
  </div>
  )
}

export default Footer