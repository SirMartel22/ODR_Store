import React, { useContext, useState, useEffect } from 'react'
import Logo from '/src/assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { ShopContext } from '/src/Context/ShopContext'



const Navbar = () => {

  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();

  const [menu, setMenu] = useState(() => {
    const storedMenu = localStorage.getItem('activeMenu')
    return storedMenu || 'shop';
  })
  
  const handleMenuClick = (menuItem) => {
    setMenu(menuItem)
  }

  const handleCartClick = () => {
    setMenu(' ')
  }

  useEffect(() => {
    localStorage.setItem('activeMenu', menu)
  }, [menu]);

  const isSpecialPage = location.pathname === '/login' || location.pathname === './cart';

  // console.log(Logo)
  return (
    <div className="navbar flex flex-col md:flex-row gap-4 md:gap-24 items-center justify-around p-6">

      <div className="nav-logo w-[70px]">
        <img src={Logo} alt="Odrlogo" />
      </div>

      <ul className="nav-menu flex  items-center gap-12" >
        <li onClick= { () => handleMenuClick('shop')}>
          <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>
          {isSpecialPage && menu === 'shop' ? <hr /> : null}
         </li>
        <li onClick= { () => handleMenuClick('men')}>
          <Link style={{textDecoration: 'none'}} to='/men'>Men</Link>
          { isSpecialPage && menu === 'men' ? <hr /> : null}
        </li>
        <li onClick= { () => handleMenuClick('adult')}>
          <Link style={{textDecoration: 'none'}} to='/adult'>Adult</Link>
          {isSpecialPage && menu === 'adult' ? <hr /> : null}
        </li>
        <li onClick= { () => handleMenuClick('kid')}>
          <Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>
          { isSpecialPage && menu === 'kid' ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart flex justify-between items-center">
        <Link to='login' onClick={handleCartClick}><button className="mr-12">Login</button></Link>
        <Link to='cart' onClick={handleCartClick}><ShoppingCart /></Link>
        <div className="cart-count ml-[-8px] mt-[-8px] bg-[#00f] flex items-center justify-center rounded-[50%] h-[20px] w-[20px] text-white p-1">{ getTotalCartItems()}</div>
      </div>

    </div> 
  )
}

export default Navbar
