import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function Questions({ question }) {
    return (
        <div className='display-question-container'>
            <div className='display-votes-ans'>
            </div>
            <div className='display-votes-ans'>
                <p>{question.noOfAnswers}</p>
                <p>Comments</p>
            </div>
            <div className='display-question-details'>
                <Link to={`/Statuses/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
                <div className='display-tags-time'>
                   <div className='display-tags'>
                    </div>
                    <p className='display-time'>
                        Shared {moment(question.askedOn).fromNow()} by {question.userPosted}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Questions