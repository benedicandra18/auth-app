import React, { Component } from 'react'
import ButtonCustom from './ButtonCustom'

export class Login extends Component {
    
    render() {
        return (
            <div>
                <ButtonCustom type="in" history={this.props.history}/> 
            </div>
        )
    }
}

export default Login
