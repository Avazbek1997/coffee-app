import React from 'react'
import './Cofe.css'

const Cofe = (props) => {
  return (
   <div className="cofe">
      <img src={props.jpg} alt="" />
      <h3>{props.nom}</h3>
      <h5 id='h5'>{props.narx} <font></font></h5>
   </div>
  )
}

export default Cofe