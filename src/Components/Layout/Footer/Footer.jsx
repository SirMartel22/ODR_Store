import React from 'react'
import Logo from '/src/assets/logo.png' 
import { Facebook, Instagram } from 'lucide-react'
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import './Footer.css'
 
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <li><Facebook /> </li>
          <li><Instagram /> </li> 
          <li><FaTiktok /></li>  
          <li><FaWhatsapp /></li>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
