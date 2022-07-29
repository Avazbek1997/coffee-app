import React from 'react'
import './Header.css'
import jpg1 from './images/img.png'
import jpg2 from './images/great.png'


const Header = () => {
  return (
   <div className="head">
     <div className="navbar">
        <img src={jpg1}  />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Our Products</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Styludge</a></li>
          <li><a href="#"><i class="fa-solid fa-bag-shopping"></i> Cart <i class="fa-solid fa-circle-user"></i></a></li>
        </ul>
     </div>
     <div className="asosiy">
           <h5>Best place to buy design</h5>
           <h1>Coffee Mugs</h1>
           <p>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</p>
           <button>Explore Our Products</button>
     </div>
   </div>
  )
}

export default Header