import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react"
import Modal from "../../components/Modal/Modal"
import { BiErrorAlt } from "react-icons/bi"
import TopBar from "../../components/TopBar/TopBar"
import Footer from "../../components/Footer/Footer"

export default function Login() {
  const [loginErr, setLoginErr] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const userEmailHandler = (ev) => setUserEmail(ev.target.value)
  const userPassHandler = (ev) => setUserPassword(ev.target.value)
  const hideLoginErr = () => setLoginErr(false)

  let navigate = useNavigate()

  const loginHandler = () => {
    setIsLoading(true)

    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        let findUser = Object.entries(data).find((item) => {
          return item[1].email === userEmail && item[1].password === userPassword
        })

        if (findUser) {
          const date = new Date()
          date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000)
          document.cookie = `userID=${findUser[0]}; expires=${date}; path=/;`
          navigate("/")
        } else {
          setLoginErr(true)
        }

        setIsLoading(false)
        setUserEmail("")
        setUserPassword("")
      })
      .catch((err) => {
        console.warn(err)
        setIsLoading(false)
      })
  }

  return (
    <>
      <TopBar />
      <div className="login-box-wrapper">
        {loginErr && (
          <Modal onHide={hideLoginErr}>
            <BiErrorAlt className="warn-modal-icon" />
            <h3>ایمیل یا پسورد شما اشتباه است!</h3>
            <p>لطفا با دقت بیشتری اطلاعات را وارد کنید یا اگر حسابی ندارید ثبت نام کنید.</p>
            <Link className="warn-modal-link" to="/register">
              ساخت حساب
            </Link>
          </Modal>
        )}

        <div className="login-box">
          <div className="header">
            <Link to="/">
              <img src="/image/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="body">
            <label htmlFor="login-email-input">ایمیل شما:</label>
            <input
              onChange={userEmailHandler}
              value={userEmail}
              placeholder="ایمیل خود را وارد کنید..."
              id="login-email-input"
              type="email"
            />

            <label htmlFor="login-pass-input">پسورد شما:</label>
            <input
              onChange={userPassHandler}
              value={userPassword}
              placeholder="پسورد خود را وارد کنید..."
              id="login-pass-input"
              type="password"
            />

            <button
              disabled={isLoading}
              style={{ opacity: isLoading && "70%" }}
              onClick={loginHandler}
            >
              {isLoading ? "درحال ورود..." : "ورود به حساب"}
            </button>
            <span>
              هنوز حسابی ندارید؟ <Link to="/register">اینجا کلیک کنید.</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
