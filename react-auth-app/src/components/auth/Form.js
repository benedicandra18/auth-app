import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Form.css'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {setData, getData} from './../../redux/actions/authActions'

export class FormLogin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            birthYear: ''
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = async e => {
        e.preventDefault()
        const data = {
            email: this.state.email,
            birthYear: this.state.birthYear
        }
        //VARIANTA CU LOCAL STORAGE
        /*var allData=[]
        if(localStorage.getItem("data")){
            allData=JSON.parse(localStorage.getItem("data"))
        }
        allData.push(data)
        localStorage.setItem("data", JSON.stringify(allData))
        this.props.setData(allData)*/
        await this.props.setData(data)
        await this.props.getData()
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            required
                            placeholder="Enter email"
                            onChange={this.onChange}
                            value={this.state.email}
                            name="email"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Birth year</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Birth year"
                            onChange={this.onChange}
                            min={1900} max={2021}
                            value={this.state.birthYear}
                            name="birthYear"
                        ></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="success">Submit</Button>

                </Form>
            </div>
        )
    }
}

FormLogin.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { setData, getData})(FormLogin)
