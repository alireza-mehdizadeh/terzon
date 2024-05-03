import React, { useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import Sidebar from '../../components/AdminPanel/Sidebar/Sidebar'
import './Index.css'

export default function Index() {

    const [showSidebar, setShowSidebar] = useState(false)

    const showSidebarHandler = () => setShowSidebar(prev => !prev)

    return (
        <>

            <Sidebar show={showSidebar} onHide={showSidebarHandler}>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='products' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 ps-3 rounded-pill text-dark'>
                        <span>محصولات</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='followers' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 ps-3 rounded-pill text-dark'>
                        <span>دنبال کنندگان</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='messages' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 ps-3 rounded-pill text-dark'>
                        <span>پیام ها</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='protection' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 ps-3 rounded-pill text-dark'>
                        <span>حمایت ها</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='posts' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 ps-3 rounded-pill text-dark'>
                        <span>پست ها</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='site-detailes' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 ps-3 rounded-pill text-dark'>
                        <span>اطلاعات سایت</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='settings' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 ps-3 rounded-pill text-dark'>
                        <span>تنظیمات کاربری</span>
                    </NavLink>
                </li>

            </Sidebar>

            <Container className='bg-white p-2 mt-3 rounded min-vh-100'>

                <Navbar bg="light" expand='sx' className="mb-3 fw-bold">
                    <Container fluid>
                        <Navbar.Brand target='_blank' href="/">سیستم مدیریت ترزون</Navbar.Brand>
                        <Navbar.Toggle onClick={showSidebarHandler} />
                    </Container>
                </Navbar>

                <Outlet />
            </Container>
        </>
    )
}