import React from 'react'
import Logo from '../../assets/SO_logo.svg';

const AboutAuth = () => {
  return (
    <div className='auth-container-1'>
        <img src={Logo} alt='logo' className='signupLogo' />
        <p style={{fontSize:"20px"}}>Get unstuck - ask a question!!</p>
        <p style={{fontSize:"20px"}}>Save your favorite posts, tags and filters</p>
        <p style={{fontSize:"20px"}}>Answer questions and earn reputation</p>
        <p style={{color:"#666767", fontSize:"13px"}}>Collaborate and share knowledge with a private group for FREE.<br/>
        <span style={{color:"#007ac6"}}>Get Stack Overflow for Teams free for up to 50 users.</span></p>
    </div>
  )
}

export default AboutAuth