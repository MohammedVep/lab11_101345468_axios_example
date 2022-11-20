import React, { Component } from 'react'

export default class PersonDetails extends Component {
  render() {
    const person = this.props.person
    return (
        <>
        <p><img heignt="100" width="100" src="https://placebear.com/g/200/200"/></p>  
            <p>{person.name} - {person.email}</p>
            <p>{person.username}</p>
            <p>{person.address.suite}, {person.address.street}, {person.address.city} {person.address.zipcode}</p>
            <p>{person.phone}</p>
        </>
    )
  }
}