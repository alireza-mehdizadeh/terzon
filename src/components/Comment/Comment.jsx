import React from 'react'
import './Comment.css'
import { RiQuestionAnswerLine } from 'react-icons/ri'

export default function Comment({ onReplay, text, name, commentID }) {
    return (
        <div className='comment-box'>
            <img src="/image/avatar.png" alt="user image" />
            <div>
                <span>{name}</span>
                <p>{text}</p>
            </div>
            <RiQuestionAnswerLine className='replay-comment-btn' onClick={() => onReplay(commentID)} />
        </div>
    )
}
