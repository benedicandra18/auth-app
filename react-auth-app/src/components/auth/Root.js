import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export class Root extends Component {
    render() {
        console.log(localStorage.getItem("data"))
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Birth year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {JSON.parse(localStorage.getItem("data")).map(data => (
                            <tr>
                                <td>{data.email}</td>
                                <td>{data.birthYear}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Root
