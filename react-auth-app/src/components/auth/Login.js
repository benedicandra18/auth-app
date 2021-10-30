import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export class Login extends Component {
    handleClick =()=>{
        localStorage.setItem("is_logged_in", true)
        this.props.history.push("/form");
    }
    render() {
        return (
            <div>
                <Button onClick={this.handleClick} variant="primary">Click me to login!</Button>
                
            </div>
        )
    }
}

export default Login
