import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Logo from '/src/assets/logo.png'
import cartIcon from '/src/assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [menu, setMenu] = useState(() => {
    const menuItem = localStorage.getItem('activeMenu')
    return menuItem;
  })
  
  const handleMenuClick = (menuList) => {
    setMenu(menuList)
  }

  const handleCartClick = () => {
    setMenu(' ')
  }

  useEffect(() => {
    localStorage.setItem('activeMenu', menu)
  }, [menu])

  // console.log(Logo)
  return (
    <div className="navbar">

      <div className="nav-logo">
        <img src={Logo} alt="Odrlogo" />
      </div>

      <ul className="nav-menu">
        <li onClick= { () => handleMenuClick('shop')}>
          <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>
          {menu === 'shop' ? <hr /> : null}
         </li>
        <li onClick= { () => handleMenuClick('shop')}>
          <Link style={{textDecoration: 'none'}} to='/men'>Men</Link>
          {menu === 'mens' ? <hr /> : null}
        </li>
        <li onClick= { () => handleMenuClick('shop')}>
          <Link style={{textDecoration: 'none'}} to='/adult'>Adult</Link>
          {menu === 'Adult' ? <hr /> : null}
        </li>
        <li onClick= { () => handleMenuClick('shop')}>
          <Link style={{textDecoration: 'none'}} to='/kid'>Kids</Link>
          {menu === 'Kids' ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='login' onClick={handleCartClick}><button className="">Login</button></Link>
        <Link to='cart' onClick={handleCartClick}><img src={cartIcon} alt="cart-png" className="" /></Link>
        <div className="cart-count">0</div>
      </div>

    </div> 
  )
}

export default Navbar
