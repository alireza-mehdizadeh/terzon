import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ children, column }) {
    return (
        <ul className={`nav-list ${column && 'column-type-list'}`}>
            <li><NavLink to="/">صفحه اصلی</NavLink></li>
            <li><NavLink to="/products?category=offer">تخفیفی ها</NavLink></li>
            <li><NavLink to="/products?category=mobile">موبایل</NavLink></li>
            <li><NavLink to="/products?category=laptop">لپتاپ</NavLink></li>
            <li><NavLink to="/products?category=accessories">لوازم جابی</NavLink></li>
            <li><NavLink to="/products?category=more">دیگر محصولات</NavLink></li>
            {children}
        </ul>
    )
}