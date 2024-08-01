import React from 'react'
import './Collaborators.css'
import { nationwide,iith,overseas} from '../../assets/collaborators'

const Collaborators = () => {
  return (
    <>
    <div className='collaborators'>
      <h1 className='collaborators-main-heading'>Collaborators<hr className='heading-underline' /></h1>

      <div className='collaborators-content'>

      <div className='india'>
        <h1 className='india-heading'>Nationwide <hr className='heading-seperator' /></h1>
        {
          nationwide.map((value, index) => {
            return (
              <li className='india-list'>{value} </li>
            )
          })
        }
      </div>
      

      <div className='foreign'>
        <h1 className='foreign-heading'>Overseas <hr className='heading-seperator' /></h1>
        {
          overseas.map((value, index) => {
            return (
              <li className='foreign-list'>{value}</li>
            )
          })
        }
      </div>
      <div className='iith'>
        <h1 className='iith-heading'>IIT-Hyderabad <hr className='heading-seperator' /></h1>
        {
          iith.map((value, index) => {
            return (
              <li className='iith-list'>{value} </li>
            )
          })
        }
      </div>
      </div>
    </div>
    </>
  )
}

export default Collaborators
