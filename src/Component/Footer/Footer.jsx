import React from 'react';
import './Footer.css';
import Linkedin from '../../asset/linkedin.png';
import Github from '../../asset/github.png';
import Instagram from '../../asset/instagram.png';
import Logo from '../../asset/logo-f.png';

const Footer = () => {
  return (
    <div className='Footer-container'>
      <hr />
      <div className="footer">
        <div className='social-link'>
          <img src={Github} alt='' />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
        <div className='Logo-f'>
          <img src={Logo} alt='' />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer