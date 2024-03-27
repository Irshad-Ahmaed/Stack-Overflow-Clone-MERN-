import React from 'react'
import './RightSidebar.css'

import comment from '../../assets/message.png'
import pen from '../../assets/pencil.png'
import blackLogo from '../../assets/stack.png'
import stackLogo from '../../assets/SOI.svg.png'

const Widget = () => {
  return (
    <div className='widget'>

      <h4 style={{borderTop:"0"}}>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt='pen' width='10' />
          <p> Building GenAI features in practice with <br /> Intuit Mailchimp </p>
        </div>

        <div className='right-sidebar-div-2'>
          <img src={pen} alt='pen' width='10' />
          <p> A leading ML educator on what you need <br /> to know about LLMs </p>
        </div>
      </div>

      <h4>Upcoming Events</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={stackLogo} alt='stackLogo' width='20' />
          <p> <span className='UpEventsSpan'> 2024 Community Moderator Election </span> <br /> ends in 4 days </p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt='comment' width='15' />
          <p>Changing how community leadership <br /> works on Stack Exchange: a proposal and... </p>
        </div>

        <div className='right-sidebar-div-2'>
          <img src={comment} alt='comment' width='15' />
          <p>Shifting the data dump schedule: A <br /> proposal </p>
        </div>

        <div className='right-sidebar-div-2'>
          <img src={blackLogo} alt='blackLogo' width='15' />
          <p>Temporary policy: Generative AI (e.g., <br /> ChatGPT) is banned </p>
        </div>
      </div>

    </div>
  )
}

export default Widget