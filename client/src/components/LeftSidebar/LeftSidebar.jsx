import React from 'react'
import './LeftSidebar.css'
import Globe from '../../assets/Ques_Icon.png'
import HomeIcon from '../../assets/home.png'
import UserIcon from '../../assets/UserIcon.png'
import Earth from '../../assets/world.png'
import Tags from '../../assets/supermarket.png'
import {NavLink} from 'react-router-dom'


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>

        <NavLink to='/' className='side-nav-links' activeClass = 'active' style={{textDecoration:"none"}}>
        <img src={HomeIcon} alt='home_icon' style={{width:"20px"}} />
          <p style={{paddingLeft: "10px"}}>Home</p>
        </NavLink>

        <div className='side-nav-div'>

          <NavLink to='/Questions' className='side-nav-links' style={{textDecoration:"none"}}>
            <img src={Globe} alt='Globe' style={{width:"20px"}} />
            <p style={{paddingLeft: "10px"}}>Question</p>
          </NavLink>

          <NavLink to='/Tags' className='side-nav-links' style={{textDecoration:"none"}}>
            <img src={Tags} alt='Tags' style={{width:"20px"}} />
            <p style={{paddingLeft: "10px"}}>Tags</p>
          </NavLink>

          <NavLink to='/Users' className='side-nav-links' style={{marginTop:"30px", textDecoration:"none"}}>
            <img src={UserIcon} alt='UserIcon' style={{width:"20px"}} />
            <p style={{paddingLeft: "10px"}}>Users</p>
          </NavLink>

          <div className='side-nav-links' style={{display:"flex", alignItems:"center", padding:"0 5px 0 0"}}>
            <img src={Earth} alt='Earth' style={{width:"15px"}} />
            <p style={{paddingLeft:"5px"}}>PUBLIC</p>
          </div>

        </div>

      </nav>
    </div>
  )
}

export default LeftSidebar