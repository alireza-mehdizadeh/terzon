import React from 'react'
import './FooterWidget.css'

export default function FooterWidget({ title, subTitle, children }) {
    return (
        <div className='footer-widget'>
            {
                children
            }
            <div>
                <p>{title}</p>
                <span>{subTitle}</span>
            </div>
        </div>
    )
}
