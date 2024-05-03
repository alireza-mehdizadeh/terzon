import React, { Component } from 'react'
import './UserLoginStatus.css'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default class UserLoginStatus extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userData: null
        }
    }

    componentDidMount() {
        this.userCookie = document.cookie.slice(7)

        if (this.userCookie.trim()) {
            fetch(`https://terzon-back.iran.liara.run//users/${this.userCookie}.json`)
                .then(res => res.json())
                .then(data => this.setState({ userData: data }))
        }
    }

    render() {
        return (
            <div className="topBar-register-box">
                <Link to={this.state.userData ? '/about-user' : '/login'}>
                    <div className="topBar-register-datas">
                        <span className='topBar-register-datas-user-name'>{this.state.userData ? this.state.userData.userName : 'حساب کاربری'}</span>
                        <span className='topBar-register-datas-user-status'>{this.state.userData ? this.state.userData.email : 'لطفا وارد حساب خود شوید'}</span>
                    </div>
                    <span className='topBar-register-user-icon'>
                        <BiUser />
                    </span>
                </Link>
            </div>
        )
    }
}