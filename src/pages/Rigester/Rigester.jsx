import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Rigester.css'
import Modal from '../../components/Modal/Modal'
import { BiErrorAlt } from 'react-icons/bi'
import TopBar from '../../components/TopBar/TopBar'
import Footer from '../../components/Footer/Footer'

export default function Rigester() {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorModal, setShowErrorModal] = useState(false)

    let navigate = useNavigate()

    const userNameHandler = event => setUserName(event.target.value)
    const emailHandler = event => setEmail(event.target.value)
    const passwordHandler = event => setPassword(event.target.value)

    const hideErrorModal = () => setShowErrorModal(false)

    const getNowDate = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const now = new Date()

        let nowMonthNum = now.getMonth()
        let nowDayOfMonth = now.getDate()
        let nowYear = now.getFullYear()
        let nowDayNum = now.getDay()
        let nowHours = now.getHours()
        let nowMinutes = now.getMinutes()
        let nowSeconds = now.getSeconds()

        return `${months[nowMonthNum]} ${nowDayOfMonth}, ${nowYear} (${days[nowDayNum]}) - ${nowHours}:${nowMinutes}:${nowSeconds}`
    }

    const addUser = () => {
        if (userName && email && password) {
            let newUser = {
                userName,
                email,
                password,
                cart: [],
                lastBuy: [],
                creditAt: getNowDate()
            }

            fetch('https://terzon-back.iran.liara.run/users', {
                method: 'POST',
                body: JSON.stringify(newUser)
            }).then(res => navigate('/login'))
        } else {
            setShowErrorModal(true)
        }
    }

    return (
        <>
            <TopBar />
            <div className='rigester-box-wrapper'>
                <div className="rigester-box">
                    <div className="header">
                        <Link to='/'>
                            <img src="/image/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="body">
                        <label htmlFor="rigester-name-input">نام شما:</label>
                        <input value={userName} onChange={userNameHandler} placeholder='نام کاربری خود را وارد کنید...' id='rigester-name-input' type="text" />

                        <label htmlFor="rigester-email-input">ایمیل شما:</label>
                        <input value={email} onChange={emailHandler} placeholder='ایمیل خود را وارد کنید...' id='rigester-email-input' type="email" />

                        <label htmlFor="rigester-password-input">رمز حساب:</label>
                        <input value={password} onChange={passwordHandler} placeholder='رمز خود را وارد کنید...' id='rigester-password-input' type="password" />

                        <button onClick={addUser}>ساخت حساب</button>
                        <span>قبلا حساب ساختید؟ <Link to='/login'>اینجا کلیک کنید.</Link></span>
                    </div>
                </div>

                {
                    showErrorModal && (
                        <Modal title='خطا در ساخت حساب' onHide={hideErrorModal}>
                            <BiErrorAlt className='error-icon' />
                            <h3>لظفا تمامی باکس هارا وارد کنید!</h3>
                        </Modal>
                    )
                }

            </div>
            <Footer />
        </>
    )
}