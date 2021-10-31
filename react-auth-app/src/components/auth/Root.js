import React, { Component } from 'react'
import { Table, Button, Badge } from 'react-bootstrap'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getData } from './../../redux/actions/authActions'

export class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.getData()
    }

    handleClick = () => {
        this.props.data.data
            .sort()
            .then(res => console.log(res))
    }

    render() {
        console.log(this.props.data.data)
        const { data } = this.props.data
        return (
            <div>
                {data.length == 0 ?
                    (<h1><Badge bg="danger">There is no data!</Badge></h1>) : (
                        <div>
                            <Button onClick={this.handleClick}>Sort</Button>
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
                                    {data.map(obj => (
                                        <tr>
                                            <td>{obj.email}</td>
                                            <td>{obj.birthYear}</td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    )}
            </div>
        )
    }
}

Root.propTypes = {
    getData: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    data: state.data
})

export default connect(mapStateToProps, {getData})(Root)
