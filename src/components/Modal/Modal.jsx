import React from 'react'
import './Modal.css'
import { IoClose } from 'react-icons/io5'

export default function Modal({ title, children, onHide }) {
    return (
        <div className='modal-wrapper'>

            <div className="modal">
                <div className="title-box" style={{ border: !title && 'none' }}>
                    <IoClose className='icon' onClick={onHide} />
                    {title && <h3>{title}</h3>}
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}
