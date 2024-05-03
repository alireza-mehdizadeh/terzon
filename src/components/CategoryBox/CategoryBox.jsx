import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryBox.css'

export default function CategoryBox({ title, img, count, url }) {
    return (
        <Link to={url} className='categoryBox'>
            <img src={img} alt="category icon" />
            <div className='name-box'>
                <h4>{title}</h4>
                <span>+{count} محصول</span>
            </div>
        </Link>
    )
}
