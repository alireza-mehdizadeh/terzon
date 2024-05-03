import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { BsArrowRightCircle } from 'react-icons/bs'

export default function Sidebar({ show, onHide, children }) {
    return (
        <Offcanvas style={{ maxWidth: '360px' }} className='w-100 border-0' show={show} onHide={onHide}>
            <Offcanvas.Body className='pt-2'>
                <ul style={{ listStyle: 'none' }} className='d-flex flex-column gap-3 w-100 h-75 px-4 pt-0'>
                    <li className='fw-bold d-flex align-items-center justify-content-start pt-1 w-100'>
                        <span className='d-flex gap-1 w-100 h-100 py-4 bor border-bottom border-2 text-dark position-relative'>
                            <span className='Offcanvas-title'>به پنل  خوش آمدی</span>
                            <BsArrowRightCircle onClick={onHide} className='close-account-sidebar position-absolute end-0 fs-5 text-theme' />
                        </span>
                    </li>

                    {children}

                </ul>
            </Offcanvas.Body>
        </Offcanvas>

    )
}