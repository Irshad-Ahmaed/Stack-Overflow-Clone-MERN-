import React from 'react'
import QuestionBar from './QuestionBar'

const QuestionList = ({questionList}) => {
  return (
    
    questionList.map((question) => (
        <QuestionBar question={question} key={question.id} />
    ))
    
  )
}

export default QuestionList