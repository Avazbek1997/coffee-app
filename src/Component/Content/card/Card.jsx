import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='CARD'>
       <img src={props.img} alt="" />
       <h2>{props.name}</h2>
       <h4>{props.price}</h4>
    </div>
  )
}

export default Card