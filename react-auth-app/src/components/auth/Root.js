import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getData } from './../../redux/actions/authActions'

export class Root extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
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
                        {/* VARIANTA CU LOCALSTORAGE
                         {JSON.parse(localStorage.getItem("data")).map(data => (
                            <tr>
                                <td>{data.email}</td>
                                <td>{data.birthYear}</td>
                            </tr>
                        )
                        )} */}
                        {this.props.auth.data.map(data => (
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

Root.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { getData })(Root)
