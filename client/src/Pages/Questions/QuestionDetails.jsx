import React, { useState } from 'react'
import {useParams, Link, useNavigate, useLocation} from 'react-router-dom'

import upVote from '../../assets/up_icon.svg'
import downVote from '../../assets/down_icon.svg'

import './Question.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { useSelector, useDispatch } from 'react-redux'

import moment from 'moment' // for managing the time.
import copy from 'copy-to-clipboard'
import {postAnswer, deleteQuestion } from '../../actions/question'

const QuestionDetails = () => {

  const {id} = useParams()
  const questionList = useSelector(state => state.questionReducer)

  // let questionList = [{
  //   _id: '1',
  //   upVotes: 3,
  //   downVotes: 1,
  //   views: 4,
  //   noOfAnswer: 2,
  //   questionTitle: "What is a function?",
  //   detailQuestion: "What is a function a how it works, I don't get it someone help please",
  //   questionTags: ["java", "node.js", "react.js"],
  //   userPosted: "Irshad",
  //   userId: 1,
  //   askedOn: "March 11",
  //   modifiedOn: "Today",
  //   answer:[{
  //     answerBody: "Answer",
  //     QAnswer: "A function is a relationship between inputs where each input is related to exactly one output.",
  //     userAnswered: "Ahmad",
  //     answeredOn: "March 12",
  //     userId: '2',
  //     ansUpVotes: 1,
  //     ansDownVotes: 1
  //   }]
  // }]

  const [Answer, setAnswer] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const User = useSelector((state) => state.currentUserReducer)
  
  const location = useLocation()
  const url = 'http://localhost:3000'

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if(User === null){
      alert("Login or Signup for answer the question")
    } else{
      if(Answer === ''){
        alert("Enter an answer before submitting")
      } else{
        setAnswer('')
        dispatch(postAnswer({ id, noOfAnswer: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
      }
    }
  }

  const handleShare =() => {
    copy(url+location.pathname)
    alert("Copied url: " + url + location.pathname)
  }
  
  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate))
  }

  const handleUpdate = (id, title, body, tags) => {
    navigate('/AskQuestion', {state:{id, title, body, tags}})
  }

  return (
    <div className='question-details-page'>
      {
        questionList.data === null ? 
        <>
          <h2 className='loading-effect'>
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>...</span>
          </h2>
        </>
        :
        <>
          {
            questionList.data.filter((ques)=>
              ques._id === id
            ).map((question) => (
              <div key={question._id}>
                <section className='question-detail-container'>
                  <h1 style={{color:"rgba(43, 43, 43, 0.9)", fontWeight:"400", fontSize:"30px"}}>{question.questionTitle}</h1>

                  <div className='ques-time-detail'>
                    <p>Asked <span>{moment(question.askedOn).fromNow()}</span></p>
                    <p>Modified <span>{moment(question.modifiedOn).fromNow()}</span></p>
                    <p>Viewed <span>{question.views} times</span></p>
                  </div>

                  <div className='ques-time-hr'></div>
                </section>
                
                <section className='question-detail-section-2' style={{width:"100%"}}>
                  <div className='question-detail-container-2'>

                    <div className='question-votes'>
                      <div><img src={upVote} alt='upArrow' width='15' /></div>
                      <p>{question.upVotes - question.downVotes}</p>
                      <div><img src={downVote} alt='downArrow' width='15' /></div>
                    </div>

                    <div className='ques-tags'>
                      <p className='question-body' style={{margin:"20px 0 0 0"}}>{question.questionBody}</p>
                      <div className='question-detail-tag'>
                        {
                          question.questionTags.map((tag)=>(
                            <p key={tag}>{tag}</p>
                          ))
                        }
                      </div>

                      <div className='question-action-user'>

                        <div className='share-btn-s'>
                          <button type='button' onClick={handleShare}>Share</button>
                          {
                            User?.result?._id === question?.userId &&
                            <button type='button' onClick={handleDelete}>Delete</button>
                          }
                          {
                            User?.result?._id === question?.userId &&
                            <button type='button' onClick={() => handleUpdate(question._id, question.questionTitle, question.questionBody, question.questionTags) }>Edit</button>
                          }
                        </div>

                        <div className='avatar-div'>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <div>
                            <Link to={`/User/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                              <Avatar><span style={{margin:"0"}} className='ques-user-icon'>{question.userPosted.charAt(0).toUpperCase()}</span></Avatar>
                              <div className='user-posted'>
                                {question.userPosted}
                              </div>
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {
                    question.noOfAnswer !== 0 && (
                      <section className='ans-vote-display'>
                        {
                          question.noOfAnswer === null
                          ? 
                          <h3> </h3>
                          :
                          <h3 style={{fontWeight:"400",fontSize:"22px" }}>{question.answer.length} {question.answer.length > 1 ? 'Answers' : 'Answer'}</h3>
                        }
                        <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                      </section>
                    ) 
                  }

                  <section className='post-ans-container' style={{width:"100%"}}>
                    <h3 style={{fontWeight:"400",fontSize:"21px" }}>Your Answer</h3>
                    
                    <form onSubmit={ (e) => handlePostAns(e, question.answer.length)}>
                      <textarea rows='11' cols='94' onChange={(e) => setAnswer(e.target.value)} style={{border:"2px solid rgb(116, 115, 115, 0.5)"}}></textarea>
                      <input type='submit' className='post-ans-btn' value='Post Your Answer' />
                    </form>

                    <p>
                      Browse other questions tagged Browse other questions tagged <span> </span> 
                      {
                        question.questionTags.map((tag)=>(
                          <>
                            <Link to='/Tags' style={{textDecoration:"none"}} key={tag} className='ans-tags'><span className='ans-footer-tag'>{tag}</span></Link>
                            <span> </span>
                          </>
                        ))
                      }
                      or 
                      <Link to='/AskQuestion' style={{textDecoration:"none", color:"#025ab8cf"}}> ask your own question.</Link>
                    </p>
                  </section>

                </section>  

              </div>
            ))
          }
        </>
      }
    </div>
  )
}

export default QuestionDetails