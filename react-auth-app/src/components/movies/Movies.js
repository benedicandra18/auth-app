import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import './Movies.css'

export class Movies extends Component {
    constructor(){
        super()
        this.state={
            movies: []
        }
    }

    componentDidMount(){
        fetch("https://api.tvmaze.com/shows")
        .then(res=>res.json())
        .then(data=>this.setState({
            movies: data
        }) )

    }
    render() {
        
        return (
            <div>
                <Table striped bordered hover>
                <thead>
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Rating</th>
                            <th>Image</th>
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
                        {this.state.movies.map(data => (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.language}</td>
                                <td>{data.rating.average}</td>
                                <td><img src={data.image.medium}/></td>
                            </tr>
                        )
                        )}
                    </tbody>
                </Table>
                
            </div>
        )
    }
}

export default Movies
