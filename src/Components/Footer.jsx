import React from 'react'
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import '../Styles.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <a href="#" className='footer__logo'>TANIYA NASKAR</a>
        <div className="social-icons ">
          <a href="https://github.com/Naskt01" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
          <a href="https://www.facebook.com/taniya.naskar" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/__hazylnutt__/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/taniyanaskar07/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin/></a>
        </div>
        <div className="footer__copyright">
          <small>Copyright © {new Date().getFullYear()} Taniya Naskar. All rights reserved.</small>
        </div>
      </div>      
    </footer>
  )
}

export default Footer