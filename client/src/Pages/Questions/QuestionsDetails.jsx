import React from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'

import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {postAnswer, deleteQuestion } from '../../actions/question'
import moment from 'moment'
import  copy from 'copy-to-clipboard'


function QuestionsDetails() {
  const { id } = useParams()
  const questionsList = useSelector((state) => (state.questionsReducers))

  const [Answer, setAnswer] = useState('')
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const User = useSelector((state => state.currentUserReducer))
  const location = useLocation()
  const url =  'http://localhost:3000'
  const handlePostAns = (e, answerLength) => {
    e.preventDefault()
    if(User === null){
      alert('Login or signup to answera question')
      Navigate('/Auth')

    }else{
      if(Answer === ''){
        alert('Enter an answer before submitting')

      }else{
        dispatch(postAnswer({ id, noOfAnswers: answerLength + 1,  answerBody: Answer, userAnswered: User.result.name, userId:User.result._id}))
        setAnswer('')
      }
    }
  }
  const handleShare = () => {
    copy(url+location.pathname)
    alert("Copied url : "+url+location.pathname)
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))

  }

  return (
    <div className='question-details-page'>

      {
        questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            {
              questionsList.data.filter(question => question._id === id).map(question => (
                <div key={question._id}>
                  <section className='question-details-container'>
                    <h1>{question.questionTitle}</h1>
                    <div className='question-details-container-2'>
                      <div className='question-votes'>
                      </div>
                      <div style={{ width: "100%" }}>
                        <p className='question-body'>{question.questionBody}</p>
                        <div className='question-details-tags'>
                        </div>
                        <div className='question-actions-user'>
                          <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                              User?.result?._id === question?.userId && (
                                <button type='button' onClick={handleDelete}>Delete</button>
                              )
                            }
                          </div>
                          <div>
                            <p>Posted {moment(question.askedOn).fromNow()} </p>
                            <Link to={`/users/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                              <Avatar backgroundColor='purple' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                              <div>
                                {question.userPosted}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {
                    question.noOfAnswers !== 0 && (
                      <section>
                        <h3>
                          {question.noOfAnswers} Comments
                        </h3>
                        <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                      </section>
                    )
                  }
                  <section className='post-ans-container'>
                    <h3>Write Comments</h3>
                    <form onSubmit={(e) => { handlePostAns(e, question.answer.length) }}>
                      <textarea className='reply-textarea' name="" id='' cols='30' rows='10' onChange={ e => setAnswer(e.target.value) }></textarea><br />
                      <input type='submit' className='post-ans-btn' value='Post Comment' />
                    </form>
                  </section>
                </div>
              ))
            }
          </>
      }
    </div>
  )
}

export default QuestionsDetails