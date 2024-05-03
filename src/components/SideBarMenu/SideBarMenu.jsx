import React from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import { IoClose } from 'react-icons/io5'
import './SideBarMenu.css'
import { Link } from 'react-router-dom'

export default function SideBarMenu(props) {

    const closeMenu = () => props.showHandler()

    return (
        <div className='SideBarMenu-container'>

            <IoClose onClick={closeMenu} className='close-icon' />

            <SearchBar background='#f5f5f5f5' />

            <div className="navbar-container">
                <NavBar column>
                    <li><Link to='/about-user'>حساب کاربری</Link></li>
                </NavBar>
            </div>

        </div>
    )
}
