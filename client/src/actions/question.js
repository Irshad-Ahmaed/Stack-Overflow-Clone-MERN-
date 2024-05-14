import * as api from '../api'

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const {data} = await api.postQuestion(questionData)
    dispatch({ type: "POST_QUESTION", payload: data })
    dispatch(fetchAllQuestions())
    navigate('/')

  } catch (error) {
    console.log(error)
  }
}

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    console.log("fetched data")
    const {data} = await api.getAllQuestions()
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data })
    
  } catch (error) {
    console.log(error)
  }
}

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
    const { data } =await api.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId)
    
    dispatch({type: 'POST_ANSWER', payload: data})
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try{
    api.deleteQuestion(id)
    dispatch(fetchAllQuestions())
    navigate('/')
  } catch(error){
    console.log(error)
  }
}

export const updateAskQuestion = (id, askQuestionData, navigate) => async (dispatch)=> {
  try {
    await api.updateAskQuestion(id, askQuestionData)
    dispatch(fetchAllQuestions())
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const updateViews =(id, views, navigate) => async (dispatch)=> {
  try {
    api.updateViews(id, views)
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch)=>{
  try {
    api.deleteAnswer(id, answerId, noOfAnswers);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
}

export const editAnswer = (id, answerId, answerBody)=> async (dispatch)=> {

}

export const voteQuestion = (id, value, userId) => async (dispatch) => {
  try {
    console.log("reach action")
    await api.voteQuestion(id, value, userId);
    console.log("reach action 2")
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error)
  }
}

