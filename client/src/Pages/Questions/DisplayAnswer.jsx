import React from 'react'
import {Link} from 'react-router-dom'

import upVote from '../../assets/up_icon.svg'
import downVote from '../../assets/down_icon.svg'

import Avatar from '../../components/Avatar/Avatar'
const DisplayAnswer = ({question}) => {
  return (
    <div>
      {
        question.answer.map((ans)=>(
          <>
            <div className='detail-ans-div'>
              <div className='question-votes'>
                <div><img src={upVote} alt='upArrow' width='20' /></div>
                <p>{ans.ansUpVotes - ans.ansDownVotes}</p>
                <div><img src={downVote} alt='downArrow' width='20' /></div>
              </div>

              <div style={{margin:"15px 0 0 0"}}>{ans.QAnswer}</div>
            </div>

            <div className='question-action-user' style={{margin:"0 0px 72px 67px"}}>
              <div className='share-btn-s' style={{margin:"0"}}>
                <button type='button'>Share</button>
                <button type='button'>Delete</button>
              </div>

              <div className='avatar-div' style={{backgroundColor:"white"}}>
                <p>answered {ans.answeredOn}</p>
                <div>
                  <Link to={`/User/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                    <Avatar><span className='ans-user-icon'>{ans.userAnswered.charAt(0).toUpperCase()}</span></Avatar>
                    <div className='user-posted'>
                      {ans.userAnswered}
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className='ans-hr' style={{width:"100%", backgroundColor:"rgb(116, 115, 115, 0.3)", height:"1px", margin:"100px 0 20px 0"}}></div>
          </>
        ))
      }
    </div>
  )
}

export default DisplayAnswer