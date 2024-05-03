import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivatePage({ children }) {

    const userCookie = document.cookie

    return (
        <>
            {
                userCookie ? children : (<Navigate to='/login' />)
            }
        </>
    )
}