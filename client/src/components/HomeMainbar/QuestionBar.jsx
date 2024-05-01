import moment from 'moment'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { updateViews } from '../../actions/question'

const QuestionBar = ({question}) => {
  // const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);
  
  const handleView=(id)=>{

    if(User?.result?._id === question?.userId){
      dispatch(updateViews(id,{views: question.views + 1}, navigate))
    }
  }
  

  return (
    <div className='display-question-container'>
        <div className='user-rating'>
          <div className='display-votes-ans'>
              <p style={{color:"black"}}>{question.upVotes - question.downVotes}</p>
              <p style={{color:"black"}}>votes</p>
          </div>

          <div className='display-votes-ans'>
              {
                question.answer.length > 0 ?
                <span className='answer-btn'>{question.answer.length} answers</span>
                :
                <p>{question.answer.length} answer</p>
              }
          </div>

          <div className='display-votes-ans'>
              <p>{question.views}</p>
              <p>views</p>
          </div>
        </div>

        <div className='display-question-details'>
            <div>
              <Link to={`/Questions/${question._id}`} onClick={()=> handleView(question._id)} className='question-title-link'>{question.questionTitle}</Link>
            </div>

            {/* <p className='question-answer'>{question.questionBody}</p> */}
            
            <div className='tags-user'>
              <div className='display-tags'>
                {
                  question.questionTags.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))
                }
              </div>

              <p className='display-time'>
                {question.userPosted} | <span>{moment(question.askedOn).fromNow()}</span>
              </p>
            </div>
        </div>
    </div>
  )
}

export default QuestionBar