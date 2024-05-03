import React from 'react'
import './ReplayComment.css'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { RiQuestionAnswerLine } from 'react-icons/ri'

export default function ReplayComment({ onReplay, text, name, commentID }) {
    return (
        <div className='replay-comment-box'>
            <BsArrow90DegLeft className='icon' />
            <img src="/image/avatar.png" alt="user image" />
            <div>
                <span>{name}</span>
                <p>{text}</p>
            </div>
            <RiQuestionAnswerLine className='replay-comment-btn' onClick={() => onReplay(commentID)} />
        </div>
    )
}
