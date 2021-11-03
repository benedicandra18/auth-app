import React, { Component } from 'react'
import ButtonCustom from './ButtonCustom'
import { Button } from 'react-bootstrap'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { login } from './../../redux/actions/authActions'

export class Login extends Component {
    handleClickIn = () => {
        localStorage.setItem("is_logged_in", true)
        this.props.login()
        this.props.history.push("/form")
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClickIn} variant="primary">Click me to login!</Button>
            </div>
        )
    }
}

Login.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { login })(Login)
