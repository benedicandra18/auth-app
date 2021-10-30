import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Form.css'

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

    onSubmit = e => {
        e.preventDefault()
        const data = {
            email: this.state.email,
            birthYear: this.state.birthYear
        }
        var allData=[]
        if(localStorage.getItem("data")){
            allData=JSON.parse(localStorage.getItem("data"))
        }
        allData.push(data)
        localStorage.setItem("data", JSON.stringify(allData))
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
                            //isInvalid={!!this.props?.errors?.data?.email}
                            name="email"
                        />
                        {/* <Form.Control.Feedback type="invalid">{this.props?.errors?.data?.email}</Form.Control.Feedback> */}
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

export default FormLogin
