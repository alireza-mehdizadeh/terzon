import React, { Component } from 'react'
import './Alert.css'
import { IoClose } from 'react-icons/io5'

export default class Alert extends Component {

    constructor(props) {
        super(props)

        this.closeOfAlert = this.closeOfAlert.bind(this)

        this.state = {
            showAlert: true
        }
    }

    closeOfAlert() {
        this.setState({ showAlert: false })
    }

    render() {
        return (
            <>
                {
                    this.state.showAlert && (
                        <div className='alerts'>
                            {this.props.children}
                            <IoClose onClick={this.closeOfAlert} className='close-icon' />
                        </div>
                    )
                }
            </>
        )
    }
}
