import React, {useState} from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
    const [toggleNext, setToggleNext] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const toggleNextFun=()=>{
        setToggleNext(!toggleNext)
        isActiveFun()
    }

    const isActiveFun=()=>{
        setIsActive(!isActive)
    }

  return (
    <div className='ask-question'>
        <h1>Ask a public question</h1>
        <div className='ask-ques-container'>
            
            <div className='how-write-ques'>
                <h4>Writing a good question</h4>
                <p>
                    You’re ready to ask a programming-related question and this form will help guide you through the process.
                    <br />
                    Looking to ask a non-programming question? See the topics here to find a relevant site.
                </p>
                <h5 style={{marginBottom:"8px"}}>Steps</h5>
                <ul>
                    <li>Summarize your problem in a one-line title.</li>
                    <li>Describe your problem in more detail.</li>
                    <li>Describe what you tried and what you expected to happen.</li>
                    <li>Add “tags” which help surface your question to members of the community.</li>
                    <li>Review your question and post it to the site.</li>
                </ul>
            </div>

            <div className='title-div'>
                <form>
                    
                    <label htmlFor='ask-ques-title'>
                        <h4>Title</h4>
                        <p>Be specific and imagine you’re asking a question to another person.</p>
                        <input type='text' name='questionTitle' id='ask-ques-title'
                            placeholder="e.g. Is there an R function for finding the index of an element in a vector?" 
                        />
                        {!toggleNext && !isActive && <button type='button' onClick={toggleNextFun} className='title-btn'>Next</button>}
                    </label>
                    
                </form>
            </div>

            <div className='title-div'>
                <form>
                    
                    <label htmlFor='ask-ques-detail'>
                        <h4>What are the details of your problem?</h4>
                        <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                        <textarea id='ask-ques-detail' cols="30" rows="15"></textarea>
                        { isActive && toggleNext ? <button type='button' onClick={isActiveFun} className='title-btn'>Next</button>: <div></div>}
                    </label>
                    
                </form>
            </div>

            <div className='title-div'>
                <form>
                    
                    <label htmlFor='ques-tag'>
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                        <input type='text' name='questionTitle' id='ques-tag'
                            placeholder="e.g. (postgresql laravel excel)" 
                        />
                        {!isActive && toggleNext && <button type='button' onClick={toggleNextFun} className='title-btn'>Next</button>}
                    </label>
                    
                </form>
            </div>
            
            <div className='title-div'>
                <form>
                    <label htmlFor='ques-tag'>
                        <h4>Review questions already on Stack Overflow to see if your question is a duplicate.</h4>
                        <p>Clicking on these questions will open them in a new tab for you to review. Your progress here will be saved so you can come back and continue.</p>
                        
                        {isActive && !toggleNext && <button type='submit' style={{width:"150px", marginTop:"10px"}} className='title-btn'>Review your question</button>}
                    </label>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default AskQuestion