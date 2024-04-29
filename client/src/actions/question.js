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
    const { id, noOfAnswers, answerBody, userAnswered } = answerData;
    const { data } =await api.postAnswer(id, noOfAnswers, answerBody, userAnswered)
    
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
    console.log(views)
    api.updateViews(id, views)
    dispatch(fetchAllQuestions())
    // navigate(`/Questions/${id}`)
  } catch (error) {
    console.log(error)
  }
}

export const editAnswer = (id, answerBody, navigate) => async(dispatch)=>{
  try {
    api.editAnswer(id, answerBody);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
}

export const deleteAnswer = (id, navigate) => async(dispatch)=>{
  try {
    api.deleteAnswer(id);
    dispatch(fetchAllQuestions());
    navigate('/')
  } catch (error) {
    console.log(error);
  }
}

