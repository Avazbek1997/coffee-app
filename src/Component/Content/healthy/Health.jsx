import React from 'react'
import "./Health.scss"
const Health = (props) => {
  return (
    <div className="healthy">
          <img src={props.img} alt="" />
          <p>{props.title}</p>
          <h2>{props.feel}</h2>
          <h4>{props.date}</h4>
    </div>
  )
}

export default Health