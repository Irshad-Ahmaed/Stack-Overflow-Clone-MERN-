import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {
  
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionList = useSelector(state => state.questionReducer)
  console.log(questionList)

  const redirectTo = () =>{
    if(user === null){
      alert("login/signup required")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  // let questionList = [{
  //   _id: 1,
  //   votes: 3,
  //   views: 4,
  //   noOfAnswer: 2,
  //   questionTitle: "What is a function?",
  //   detailQuestion: "What is a function a how it works, I don't get it someone help please",
  //   questionTags: ["java", "node.js", "react.js"],
  //   shortAnswer: "A function is a relationship between inputs where each input is related to exactly one output.",
  //   userPosted: "Irshad",
  //   userId: 1,
  //   askedOn: "March 11"
  // }]

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        
        <button onClick={redirectTo} className='ask-btn'>Ask Question</button>
      </div>

      <div className=''>
        {
          questionList.data === null ? <h1>Loading...</h1> : 
          <>
            <p>{questionList.data.length} questions</p>
            <QuestionList questionList={questionList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar