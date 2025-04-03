import React from 'react'
import './Footer.css'
import Pramod_logo from '../../assets/Pramod_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            {/* <img src={footer_logo} alt="" /> */}
            <img src={Pramod_logo} alt="" />
            <p>I am a Data Analyst from, INDIA with some internship experience in companies like iFutureTech, Eyesec Solutions.</p>
        </div>
        <div className="footer-right-top">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your Email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Pramod Gurav, All right reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <a href="https://www.linkedin.com/in/pramod-gurav-04b658259/" target='_blank'><p>Connect with me</p></a> 
        </div>
      </div>
    </div>
  )
}

export default Footer
