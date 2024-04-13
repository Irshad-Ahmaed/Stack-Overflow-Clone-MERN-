import React from 'react'
import {Link} from 'react-router-dom'

import upVote from '../../assets/up_icon.svg'
import downVote from '../../assets/down_icon.svg'

import Avatar from '../../components/Avatar/Avatar'
import moment from 'moment'

const DisplayAnswer = ({question, handleShare}) => {
  return (
    <div>
      {
        question.answer.map((ans)=>(
          <>
            <div className='detail-ans-div' style={{display:'flex', justifyContent: "flex-start" }}>
              <div className='question-votes' style={{padding: "0 10px 0 0"}}>
                <div><img src={upVote} alt='upArrow' width='15' /></div>
                <p>{ans.ansUpVotes - ans.ansDownVotes}</p>
                <div><img src={downVote} alt='downArrow' width='15' /></div>
              </div>

              <div style={{margin:"17px 0 0 0"}}>{ans.answerBody}</div>
            </div>

            <div className='question-action-user' style={{margin:"0 0px 72px 67px"}}>
              <div className='share-btn-s' style={{margin:"0"}}>
                <button type='button' onClick={handleShare}>Share</button>
                <button type='button'>Delete</button>
              </div>

              <div className='avatar-div' style={{backgroundColor:"white"}}>
                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                <div>
                  <Link to={`/User/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                    <Avatar><span style={{margin:"0"}} className='ans-user-icon'>{ans.userAnswered.charAt(0).toUpperCase()}</span></Avatar>
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