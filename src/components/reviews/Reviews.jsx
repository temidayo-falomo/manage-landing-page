import React from 'react'
import './Reviews.css'

const Reviews = ({number, client, text, image}) => {
  return (
      <>
      <div className="card-container">
    <div className='card'>
        <img src={image} alt='' className='avatar'/>
        <img src='' alt=''/>
        <h4>{client}</h4>
        <p>{text}</p>
    </div>
    </div>
    </>
  )
}

export default Reviews