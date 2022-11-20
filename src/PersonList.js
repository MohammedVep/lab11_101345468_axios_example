import React, { Component } from 'react'
import axios from 'axios'
import PersonDetails from './PersonDetails'

export default class PersonList extends Component {
  
    constructor(props){
        super(props)

        this.state = {
            persons: []
        }
    }

    //Lifecycle method
    componentDidMount = () => {
        this.getPersonData()
    }
  
    getPersonData = () => {
        const USER_URL = "https://jsonplaceholder.typicode.com/users"
        axios.get(USER_URL)
        .then(res => {
            console.log(res.data)
            this.setState({ ...this.state, persons: res.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() {
        return (
        <div>
            <h1>Person List</h1>
            {
                this.state.persons.map(u => (
                    <>
                    <PersonDetails key = {u.id} person = {u}/>
                    </>
                ))
            }
            
        </div>
    )
  }
}
