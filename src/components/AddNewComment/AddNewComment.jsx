import React, { Component } from 'react'
import './AddNewComment.css'

export default class AddNewComment extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nameBox: '',
            emailBox: '',
            commentText: '',
            userName: '',
            userEmail: ''
        }

        this.nameBoxHandler = this.nameBoxHandler.bind(this)
        this.emailBoxHandler = this.emailBoxHandler.bind(this)
        this.commentTextHandler = this.commentTextHandler.bind(this)
        this.submitComment = this.submitComment.bind(this)
        this.replayComment = this.replayComment.bind(this)
    }

    componentDidMount() {
        this.userCookie = document.cookie

        this.userCookie && fetch(`https://terzon-back.iran.liara.run/users/${this.userCookie.slice(7)}.json`)
            .then(res => res.json())
            .then(data => this.setState({
                userName: data.userName,
                userEmail: data.email,
                nameBox: data.userName,
                emailBox: data.email,
            }))
    }

    nameBoxHandler(ev) {
        this.setState({ nameBox: ev.target.value })
    }

    emailBoxHandler(ev) {
        this.setState({ emailBox: ev.target.value })
    }

    commentTextHandler(ev) {
        this.setState({ commentText: ev.target.value })
    }

    submitComment() {
        let newComment = {
            userName: this.state.nameBox,
            userEmail: this.state.emailBox,
            comment: this.state.commentText,
            replay: {}
        }

        fetch(`https://terzon-back.iran.liara.run/products/${this.props.productID}/comments.json`, {
            method: 'POST',
            body: JSON.stringify(newComment)
        })
            .then(res => {
                this.setState({
                    nameBox: this.state.userName || '',
                    emailBox: this.state.userEmail || '',
                    commentText: '',
                })
            })
            .catch(err => console.warn(err))
    }

    replayComment() {
        let ReplayComment = {
            userName: this.state.nameBox,
            userEmail: this.state.emailBox,
            comment: this.state.commentText,
            replay: {}
        }

        fetch(`https://terzon-back.iran.liara.run/products/${this.props.productID}/comments/${this.props.replayID}/replay.json`, {
            method: 'POST',
            body: JSON.stringify(ReplayComment)
        })
            .then(res => {
                this.setState({
                    nameBox: '',
                    emailBox: '',
                    commentText: '',
                })
            })
            .catch(err => console.warn(err))
    }

    render() {
        return (
            <div className='add-new-comment-wrapper'>

                <label htmlFor="comment-name-input">نام شما:</label>
                <input onChange={this.nameBoxHandler} value={this.state.nameBox} placeholder='نام خود را وارد کنید...' id='comment-name-input' type="text" />

                <label htmlFor="comment-email-input">ایمیل شما:</label>
                <input onChange={this.emailBoxHandler} value={this.state.emailBox} placeholder='ایمیل خود را وارد کنید...' id='comment-email-input' type="email" />

                <label htmlFor="comment-text-input">متن نظر:</label>
                <textarea onChange={this.commentTextHandler} value={this.state.commentText} placeholder='متن کامنت شما...' id='comment-text-input' rows="7"></textarea>

                <button onClick={this.props.replayID ? this.replayComment : this.submitComment}>افزودن کامنت</button>

            </div>
        )
    }
}
