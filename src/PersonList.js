import React from 'react'
import axios from 'axios'
import { Component } from 'react';
import {useState } from "react";
export default class PersonList extends Component {
  
     //Define state default values
  constructor(props){
        super(props);
        this.state = {
            persons: []
        }
    }
    //Component Lifecycle Callback
  componentDidMount = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        });
    }
  render() {
    return (
      <>
        <div>
          <h1>PersonList</h1>
          <ul>
              {
                  this.state.persons
                    .map(person => 
                      <li key={person.id}>{person.name}</li>)

              }
          </ul>
        </div>
     </>
    );
  }
}
