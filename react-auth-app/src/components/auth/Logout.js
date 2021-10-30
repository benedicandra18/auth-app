import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ButtonCustom from './ButtonCustom'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {logout} from './../../redux/actions/authActions'

export class Logout extends Component {
    handleClickOut = () => {
        localStorage.setItem("is_logged_in", false)
        this.props.logout()
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOut} variant="danger">Click me to logout!</Button>
            </div>
        )
    }
}

Logout.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout})(Logout)

