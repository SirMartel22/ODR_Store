import React from 'react'
import './Navbar.css'
import Logo from '/src/assets/logo.png'
import cartIcon from '/src/assets/logo.png'

const Navbar = () => {

  // console.log(Logo)
  return (
    <div className="navbar">

      <div className="nav-logo">
        <img src={Logo} alt="Odrlogo" />
      </div>

      <ul className="nav-menu">
        <li>Shop <hr /></li>
        <li>Men</li>
        <li>Adult</li>
        <li>Kids</li>
      </ul>

      <div className="nav-login-cart">
        <button className="">Login</button>
        <img src={cartIcon} alt="cart-png" className="" />
        <div className="cart-count">0</div>
      </div>

    </div> 
  )
}

export default Navbar
