import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  
  const user = 1;
  const navigate = useNavigate()

  const redirectTo = () =>{
    if(user === null){
      alert("login/signup required")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  let questionList = [{
    id: 1,
    votes: 3,
    views: 4,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node.js", "react.js"],
    shortAnswer: "A function is a relationship between inputs where each input is related to exactly one output.",
    userPosted: "Irshad",
    askedOn: "March 11"
  }]

  const location = useLocation()

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        
        <button onClick={redirectTo} className='ask-btn'>Ask Question</button>
      </div>

      <div className=''>
        {
          questionList === null ? <h1>Loading...</h1> : 
          <>
            <p>{questionList.length} questions</p>
            <QuestionList questionList={questionList} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar