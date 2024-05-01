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

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        
        <button onClick={redirectTo} className='ask-btn'>Ask Question</button>
      </div>

      <div className=''>
        {
          questionList.data === null
          ?
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
          </> : 
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