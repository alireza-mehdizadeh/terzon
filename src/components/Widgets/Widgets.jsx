import React, { Component } from 'react'
import './Widgets.css'

export default class Widgets extends Component {
    render() {
        return (
            <div className='widgets-wrapper'>
                <a href="http://" target="_blank">
                    <img src="image/widget01.jpg" alt="widget image" />
                    <span title='تبلیغ'>Ads</span>
                </a>
                <a href="http://" target="_blank">
                    <img src="image/widget02.jpg" alt="widget image" />
                    <span title='تبلیغ'>Ads</span>
                </a>
                <a href="http://" target="_blank">
                    <img src="image/widget03.jpg" alt="widget image" />
                    <span title='تبلیغ'>Ads</span>
                </a>
                <a href="http://" target="_blank">
                    <img src="image/widget04.jpg" alt="widget image" />
                    <span title='تبلیغ'>Ads</span>
                </a>
            </div>
        )
    }
}
