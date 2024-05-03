import React, { Component } from 'react'
import { FaMinus } from 'react-icons/fa'
import { BsPlusLg } from 'react-icons/bs'
import './Accordion.css'

export default class Accordion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAccordion: props.open ? true : false
        }

        this.accordionHandler = this.accordionHandler.bind(this)
    }

    accordionHandler() {
        this.setState(prev => {
            return { showAccordion: !prev.showAccordion }
        })
    }

    render() {
        return (
            <div className='accordion' style={{ height: this.state.showAccordion ? 'auto' : '70px' }}>
                <div className={`header ${this.props.light && 'bg-light'}`} onClick={this.accordionHandler}>
                    <h3>{this.props.title}</h3>
                    {
                        this.state.showAccordion ? (
                            <FaMinus className='icon' />
                        ) : (
                            <BsPlusLg className='icon' />
                        )
                    }
                </div>
                <div className="ac-body">
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}
