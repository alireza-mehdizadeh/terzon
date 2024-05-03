import React, { Component } from 'react'
import './ListItemGroup.css'

export default class ListItemGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='list-group-wrapper'>
                <span>{this.props.title}</span>
                <ul>
                    {
                        this.props.children
                    }
                </ul>
            </div>
        )
    }
}
