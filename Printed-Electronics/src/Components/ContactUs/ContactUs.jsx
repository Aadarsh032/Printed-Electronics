import React from 'react'
import './ContactUs.css'
import location_icon from '../../assets/location_icon.gif'
import mail_icon from '../../assets/mail_icon.png'

const ContactUs = () => {
  return (
    <>
    <div className='contactus'>
       <h1 className='contactus-heading'>Contact Us<hr className='heading-underline' /></h1>
       <div className='contactus-box'>
       <iframe className='contactus-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6037.157534385851!2d78.11998170914849!3d17.594611333092992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf764a43c2dbd%3A0xa3a6a4d315b991e2!2sDepartment%20of%20Material%20Science%20and%20Metallurgical%20Engineering%20(MSME)%2C%20IIT%20Hyderabad!5e0!3m2!1sen!2sin!4v1716835887923!5m2!1sen!2sin"width="500" height="350" ></iframe>
       <div className='contactus-box-right'>
        <h1>Get in Touch</h1>
        <div className='contactus-box-right-contents'> <img src={mail_icon} alt="" /> <p>gsuresh@msme.iith.ac.in</p></div>
        <div className='contactus-box-right-contents'> <img src={location_icon} alt="" /> <p>Department of MSME, IIT Hyderabad, Sangareddy, Telangana</p></div>
       </div>
      </div>
    </div>   
    </>
  )
}

export default ContactUs