import React from 'react'
import Logo from '/src/assets/logo.png' 
import { Facebook, Instagram } from 'lucide-react'
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import './Footer.css'
 
const Footer = () => {
  return (
    <div className="footer flex flex-col items-center justify-center gap-12 pt-12 pb-24 border">
      <div className="footer-logo flex items-center justify-center">
        <img src={Logo} alt="logo" className="w-1/3"/>
      </div>

      <ul className="footer-links flex gap-4">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container flex gap-6 ">
          <Facebook /> 
          <Instagram /> 
          <FaTiktok /> 
          <FaWhatsapp />
          
        </div>
      </div>
    </div>
  )
}

export default Footer
