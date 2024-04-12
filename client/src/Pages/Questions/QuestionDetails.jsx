import React from 'react'
import {useParams, Link} from 'react-router-dom'

import upVote from '../../assets/up_icon.svg'
import downVote from '../../assets/down_icon.svg'

import './Question.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { useSelector } from 'react-redux'

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

  return (
    <div className='question-details-page'>
      {
        questionList.data === null ? 
        <h1>Loading...</h1>
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
                    <p>Asked <span>{question.askedOn}</span></p>
                    <p>Modified <span>{question.modifiedOn}</span></p>
                    <p>Viewed <span>{question.views} times</span></p>
                  </div>

                  <div className='ques-time-hr'></div>
                </section>
                
                <section className='question-detail-section-2' style={{width:"100%"}}>
                  <div className='question-detail-container-2'>

                    <div className='question-votes'>
                      <div><img src={upVote} alt='upArrow' width='20' /></div>
                      <p>{question.upVotes - question.downVotes}</p>
                      <div><img src={downVote} alt='downArrow' width='20' /></div>
                    </div>

                    <div className='ques-tags'>
                      <p className='question-body'>{question.questionBody}</p>
                      <div className='question-detail-tag'>
                        {
                          question.questionTags.map((tag)=>(
                            <p key={tag}>{tag}</p>
                          ))
                        }
                      </div>

                      <div className='question-action-user'>

                        <div className='share-btn-s'>
                          <button type='button'>Share</button>
                          <button type='button'>Delete</button>
                        </div>

                        <div className='avatar-div'>
                          <p>asked {question.askedOn}</p>
                          <div>
                            <Link to={`/User/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                              <Avatar><span className='ques-user-icon'>{question.userPosted.charAt(0).toUpperCase()}</span></Avatar>
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
                        <h3 style={{fontWeight:"400",fontSize:"25px" }}>{question.noOfAnswer} {question.noOfAnswer > 1 ? 'Answers' : 'Answer'}</h3>
                        <DisplayAnswer key={question._id} question={question} />
                      </section>
                    ) 
                  }

                  <section className='post-ans-container' style={{width:"100%"}}>
                    <h3 style={{fontWeight:"400",fontSize:"25px" }}>Your Answer</h3>
                    <form>
                      <textarea rows='11' cols='94' style={{border:"2px solid rgb(116, 115, 115, 0.5)"}}></textarea>
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