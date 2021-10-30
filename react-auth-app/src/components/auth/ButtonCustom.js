import React, { Component } from 'react'
import { Button} from 'react-bootstrap'

export class ButtonCustom extends Component {
    handleClickIn =()=>{
        localStorage.setItem("is_logged_in", true)
        console.log(this.props)
        this.props.action()
        this.props.history.push("/form");

    }
    handleClickOut =()=>{
        localStorage.setItem("is_logged_in", false)
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                { this.props.type=="in" ? 
                <Button onClick={this.handleClickIn} variant="primary">Click me to login!</Button>:
                <Button onClick={this.handleClickOut} variant="danger">Click me to logout!</Button>
                }
            </div>
        )
    }
}

export default ButtonCustom
