import React from 'react'
import './NewsUpdates.css'
import { conferences,currentopenings,upcomingevents} from '../../assets/news&updates'

const NewsUpdates = () => {
  return (
    <>
    <div className='newsupdates'>
      <h1 className='newsupdates-main-heading'>News&Updates<hr className='heading-underline' /></h1>

      <div className='currentopenings'>
        <h1 className='currentopenings-heading'>Current Openings</h1>
        {
          currentopenings.map((value, index) => {
            return (
              <li className='currentopenings-list'>Join our research group as a Ph.D. student! Interested candidates can send there applications to <b ><u>suresh.kumar@msme.iith.ac.in</u></b> </li>
            )
          })
        }
      </div>

      <div className='upcomingevents'>
        <h1 className='upcomingevents-heading'>Upcoming Events</h1>
        {
          upcomingevents.map((value, index) => {
            return (
              <li className='upcomingevents-list'>{value}</li>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default NewsUpdates