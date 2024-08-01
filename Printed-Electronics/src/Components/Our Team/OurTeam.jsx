import React from 'react'
import './OurTeam.css'
import {  project_stu, JRF, mtech_stu, phd_stu,professor} from '../../assets/ourteam'
import ourteamimg from '../../assets/group_photo.jpg'


const OurTeam = () => {
  return (
    <>
    <div className='ourteam'>
      <div className="ourteam-imagebox">
        <img className='ourteam-backgroundimage' src={ourteamimg} alt="" />
      <h1 className='oureteam-main-heading'>Our Team</h1>
      </div>
      <div className='stu_box'>
      <h1 className="professor">Assistant Professor <hr className='heading-underline' /></h1>
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
    
      <div className='stu_box'>
      <h1 className="phdstu">PhD Students <hr className='heading-underline' /></h1>
        <div className='phd-student-box-text'>
        {
          phd_stu.map((student, index) => {
               
             
                    return(
                    <div className='phd-student-content' key={index}>
                      <img className='profile-img' src={student.profile_photo} alt="" />
                    <div className='textbox'>
                    <h1 className='name'  >{student.name}</h1>
                    <hr className='divder-line' />
                    <p className='description'>{student.description}</p>
                   </div>
                   </div>
                    )
                  
          })
        }
        </div>
      </div>
      <div className='stu_box'>
        <h1 className="mtechstu">M.Tech Students <hr className='heading-underline' /></h1>
        <div className='mtech-student-box-text'>
        {
          mtech_stu.map((student, index) => {
                
                  return(
                  <div className='mtech-student-content' key={index}>
                    <img className='profile-img' src={student.profile_photo} alt="" />
                  <div className='textbox'>
                  <h1 className='name'  >{student.name}</h1>
                  <hr className='divder-line' />
                  <p className='description'>{student.description}</p>
                 </div>
                 </div>
                  )
          })
        }
        </div>
      </div>

       {/* // JRF */}

       <div className='stu_box'>
        <h1 className="JRFstu">JRF<hr className='heading-underline' /></h1>
        <div className='JRF-student-box-text'>
        {
          JRF.map((student, index) => {
            return (
              <div className='JRF-student-content' key={index}>
                <img className='profile-img' src={student.profile_photo} alt="" />
                <div className='textbox'>
                  <h1 className='name' >{student.name}</h1>
                  <hr className='divder-line' />
                  <p className='description'>{student.description}</p>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>

      {/* //Project Students */}

      <div className='stu_box'>
        <h1 className="project_stu">Project Students<hr className='heading-underline' /></h1>
        <div className='project-student-box-text'>
        {
          project_stu.map((student, index) => {
            return (
              <div className='project-student-content' key={index}>
                <img className='profile-img' src={student.profile_photo} alt="" />
                <div className='textbox'>
                  <h1 className='name' >{student.name}</h1>
                  <hr className='divder-line' />
                  <p className='description'>{student.description}</p>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>


     {/* //Project Students */}

     <div className='stu_box'>
        <h1 className="alumini_stu"> Alumini <hr className='heading-underline' /></h1>
        <div className='alumini-student-box-text'>
        
              <div className='alumini-student-content' >
                <div className='textbox'>
                  <h1 className='name' >Rinsha P.C</h1>
                  <h1 className='name' >Jagini Sai Avinash</h1>
                </div>
              </div>
        
        </div>
      </div>

    </div>
     </>
  )
}

export default OurTeam