import React from 'react'
import './About.css'
import researchinterest from '../../assets/researchinterests'
import { professor } from '../../assets/ourteam'
import IIT_H2 from '../../assets/IIT-H2.jpg'


const About = () => {
  return (
    <>
      {/* <h1 className='aboutsection-heading'>About Us</h1> */}
   <div className='aboutsection-upperdiv'>
      <img className='aboutus-img' src={IIT_H2} alt="" />
      <div className='aboutsection-description-box'>
      
        <h3>About Us</h3>
        <p className='aboutus-para'>The "Printed a Electronics Group" focused on the development and advancement of printed electronics technology.This group aims to create innovative solutions for various industries, including electronics, energy, and healthcare, by utilizing cutting-edge printing techniques. The home page serves as a platform for showcasing their work, publishing research findings, and communicating with the wider community of experts in the field. Visitors can learn about the group's mission, current projects, and team members, as well as stay up-to-date on the latest developments in the field of printed electronics.</p>
        <p style={{ marginBottom: '0px' }}><b>Department of MSME</b> <hr className='hr-about' /></p>
        <p style={{ marginTop: '0px' }}><b>IIT Hyderabad</b></p>
      </div>
      </div>

      <div className='aboutsection'>
        {/* Professor details */}
        <div className='stu_box'>
          <h1 className="professor">From The Professor's Desk<hr className='heading-underline' /></h1>
        

          <div className='professor-box-text'>
        {
          professor.map((student, index) => {
                return (
                  <div className='professor-content' key={index}>
                    <div className='professor-content-upperdiv'>
                    <img className='profile-img' src={student.profile_photo} alt="" />
                     <h1 className='name'  >{student.name}</h1>
                    </div>
                    <div className='textbox'>
                      <hr className='divder-line' />
                      <p className='description'>{student.description}</p>
                    </div>
                  </div>
                )
          })
        }
        </div>
        </div>



        <div className='aboutsection-areaofinterest'>
          <h1 className='aboutsection-areaofinterest-heading' >Our Focus Areas and Interests <hr className='heading-underline' /></h1>
          <div className='aboutsection-areaofinterest-box'>
            {researchinterest.map((interests, index) => {
              return (<div key={index} className='interests-format'>
                <img className='interests-format-img' src={interests.topic_img} alt="" />
                <div className='interests-format-right' >
                  <h1 className='interests-heading'>{interests.topic_name}</h1>
                  <p className='interests-description'>{interests.topic_desc}</p>
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default About