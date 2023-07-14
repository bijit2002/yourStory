import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'


const HomeMainbar = () => {
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionsList = useSelector(state => state.questionsReducers)
  console.log(questionsList)
  
  const checkAuth = () => {
    if(user === null){
      alert('login or signup to ask a question')
      navigate('/Auth')
    }else{
      navigate('/PostStatus')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? (<h1>Feed</h1>) : (<h1>Statuses</h1>)
        }
        <button onClick={checkAuth} className='ask-btn'>Your Status</button>
      </div>
      <div className='main-bar-header-2'>
        {
          questionsList.data === null ?
            (<h3>Loading The Feed...</h3>) :(
            <>
              <h2>Total Status { questionsList.data?.length }</h2>
              <QuestionList questionsList={questionsList.data}/>
            </>)
        }
      </div>
    </div>
  )
}

export default HomeMainbar