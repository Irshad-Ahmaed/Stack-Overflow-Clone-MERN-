import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './Auth.css'
import AboutAuth from './AboutAuth'
import icon from '../../assets/SO_icon.png'

import {useDispatch} from 'react-redux'
import { signup, login } from '../../actions/auth'

const Auth = ({userVal}) => {
    let location = useLocation()
    const [isSignup, setIsSignup] = useState(userVal)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSwitch = () =>{
        setIsSignup(!isSignup)
        location.pathname = "/Auth/"+ isSignup === true ? "login" : "signup"
    }

    if(location.pathname === '/Auth/login' && isSignup === true){
        window.location.reload();
    }
    else if (location.pathname === '/Auth/signup' && isSignup === false){
        window.location.reload();
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        // console.log({Email, Password});

        if(!email || !password){
            alert("Enter email or password")
            window.location.reload();
        }

        if(isSignup){
            dispatch(signup({email, password}, navigate))
        }
        else{
            dispatch(login({email, password}, navigate))
        }
    }

  return (
    <section className='auth-section'>
        {isSignup && <AboutAuth/>}
        
        <div className='auth-container-2'>
            {!isSignup && <img src={icon} alt='stack overflow' className='loginLogo' />}
            
            {!isSignup && <button style={{position:"relative", backgroundColor: "white", color:"black",border: "1px solid #0000003e"}} type='button' className='login-btn'> Log in with Google </button>}
            {!isSignup && <button style={{position:"relative", backgroundColor: "black"}} type='button' className='login-btn'> Log in with GitHub </button>}
            {!isSignup && <button style={{position:"relative", marginBottom:"0", backgroundColor: "rgba(32, 73, 188, 0.837)"}} type='button' className='login-btn'> Log in with Facebook </button>}

            <form onSubmit={handleSubmit}>
                <div>
                    {isSignup && <h1 style={{fontSize:"30px", margin:0}}>Create your account</h1>}
                    { isSignup && <p style={{color: "#666767", fontSize:"13px"}}>By clicking “Sign up”, you agree to our 
                        <span style={{color:"#007ac6"}}> terms of service</span> and <br/> acknowledge you have read our 
                        <span style={{color:"#007ac6"}}> privacy policy</span>. </p>
                    }
                </div>

                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type='email' name='email' id='email' onChange={(e) => {setEmail(e.target.value)}} />
                </label>

                <label htmlFor='password'>
                <div style={{display: "flex", justifyContent: "space-between", marginTop:"5px"}}>
                    <h4>Password</h4>
                    { !isSignup && <p style={{color: "#007ac6", fontSize:"13px", marginBottom:"0"}}>Forgot password?</p>}
                </div>
                    <input type='password' name='password' id='password' onChange={(e) => {setPassword(e.target.value)}} />
                </label>

                { isSignup && <p style={{color: "#666767", fontSize:"13px"}}>Must contain 8+ characters, including at least 1 letter and 1 <br/> number.</p>}

                <button type='submit' className='auth-btn'> {isSignup? 'Sign up' : 'Log in'} </button>
                <div className='horizontalLine'></div>
                {isSignup && <button style={{backgroundColor: "white", color:"black", border: "1px solid #0000003e"}} type='button' className='signup-btn'> Log in with Google </button>}
                {isSignup && <button style={{backgroundColor: "black", marginBottom:"30px"}} type='button' className='signup-btn'> Log in with GitHub </button>}
            </form>

            <p style={{fontSize:"13px"}} className='isAccount'>
                {isSignup ? 'Already have an account?' : "Don't have an account?"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}> {isSignup ? "Log in" : "Sign up"} </button>
            </p>
            <p style={{fontSize:"13px"}} className='isTalent'>
                Are you an employer?
                <button type='button' className='handle-switch-btn'> Sign up on Talent </button>
            </p>

        </div>
    </section>
  )
}

export default Auth