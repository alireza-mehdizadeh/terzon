import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
import TopBar from '../../components/TopBar/TopBar'
import Footer from '../../components/Footer/Footer'

export default function NotFound() {
    return (
        <>
            <TopBar />

            <div className='not-found-wrapper'>
                <img src="/image/not-found.svg" alt="not found image" />
                <h1>صفحه مورد نظر شما پیدا نشد!</h1>
                <span>لصفا آدرس را به درستی وارد کنید یا به صفحه اصلی بروید</span>
                <button>
                    <Link to='/'>رفتن به خانه</Link>
                </button>
            </div>

            <Footer />
        </>
    )
}
