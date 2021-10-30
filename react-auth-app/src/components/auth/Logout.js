import React, { Component } from 'react'
import ButtonCustom from './ButtonCustom'

export class Logout extends Component {
    
    render() {
        return (
            <div>
                <ButtonCustom type="out" history={this.props.history}/> 
            </div>
        )
    }
}

export default Logout

