import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth/login' element={<Auth userVal={false}/>} />
        <Route path='/Auth/signup' element={<Auth userVal={true} />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/AskQuestion' element={<AskQuestion/>} />
        <Route path='/Questions/:id' element={<DisplayQuestion/>} />
    </Routes>
  )
}

export default AllRoutes