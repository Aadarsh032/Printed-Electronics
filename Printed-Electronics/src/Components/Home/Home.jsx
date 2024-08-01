import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import logo2 from '../../assets/logo2.png'
import background1 from '../../assets/IIT-H.jpg'
import background3 from '../../assets/20221013_175819.jpg'
import bhu from '../../assets/collaborators/BHU.jpg'
import IISc from '../../assets/collaborators/IISc.jpg'
import IITdelhi from '../../assets/collaborators/IIT Delhi.png'
import IITHyderabad from '../../assets/collaborators/IIT-H.png'
import KingsCollege from '../../assets/collaborators/Kings College.jpg'
import KITUniversity from '../../assets/collaborators/KIT University.png'
import Edinburgh from '../../assets/collaborators/university of Edinburgh.jpg'
import Manchester from '../../assets/collaborators/University of Manchester.png'
import Southampton from '../../assets/collaborators/university of southampton.png'
import Collaborators from '../Collaborators/Collaborators'

// import bhu from '../../assets/collaborators - Copy/BHU.png'
// import IISc from '../../assets/collaborators - Copy/IISc.png'
// import IITdelhi from '../../assets/collaborators - Copy/IIT_Delhi.png'
// import IITHyderabad from '../../assets/collaborators - Copy/IIT-H.png'
// import KingsCollege from '../../assets/collaborators - Copy/Kings_College.png'
// import KITUniversity from '../../assets/collaborators - Copy/KIT_University.png'
// import Edinburgh from '../../assets/collaborators - Copy/university_of_Edinburgh.png'
// import Manchester from '../../assets/collaborators - Copy/University_of_Manchester.png'
// import Southampton from '../../assets/collaborators - Copy/university_of_southampton.png'


const Home = () => {
  return (
    <>
      <div className='homepage'>
        {/* <video autoPlay loop muted width="100%"  className='background_video' >
          <source src={background_video} type="video/mp4" />
        </video> */}
        <img src={background3} alt=""  className='background_video' />
        <div className='homepage-content'>
          <div className='homepage-content-text' >
          <h1 className='homepage-content-heading'>Printed Electronics Group</h1>
          <p className='homepage-content-paragraph'>
            <hr className='homepage-content-line' />Department of MSME, IIT Hyderabad<hr className='homepage-content-line' /></p>
          <h1 className='homepage-content-slogan'>"Flex your electronics options with printed technology"</h1>
          </div>
          {/* <div className='collaborators'>
            <h3 className='collborators-heading'>Collaborators <hr /></h3>
            <Link className="collaborators-wrapper" to='/Collaborators'>
            <div className='collaborators-images'>
             <img className='collaborators-images-one' src={bhu} alt="" />
             <img className='collaborators-images-one' src={IISc} alt="" />
             <img className='collaborators-images-one' src={IITdelhi} alt="" />
             <img className='collaborators-images-one' src={IITHyderabad} alt="" />
             <img className='collaborators-images-one' src={KingsCollege} alt="" />
             <img className='collaborators-images-one' src={KITUniversity} alt="" />
             <img className='collaborators-images-one' src={Edinburgh} alt="" />
             <img className='collaborators-images-one' src={Manchester} alt="" />
             <img className='collaborators-images-one' src={Southampton} alt="" />
             
             <img className='collaborators-images-one' src={bhu} alt="" />
             <img className='collaborators-images-one' src={IISc} alt="" />
             <img className='collaborators-images-one' src={IITdelhi} alt="" />
             <img className='collaborators-images-one' src={IITHyderabad} alt="" />
             <img className='collaborators-images-one' src={KingsCollege} alt="" />
             <img className='collaborators-images-one' src={KITUniversity} alt="" />
             <img className='collaborators-images-one' src={Edinburgh} alt="" />
             <img className='collaborators-images-one' src={Manchester} alt="" />
             <img className='collaborators-images-one' src={Southampton} alt="" />
             </div>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Home