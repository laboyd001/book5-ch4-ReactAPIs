// This is a Controller Component. Its only responsibility to to control the behavior of the system. It maps URLs to components.

import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

// One of the lifecycle methods available to every React component is componentDidMount.

// componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

// The componentDidMount() hook runs after the component output has been rendered to the DOM, so if your component needs API data, that is the place to do it. Here is how you would write it to retrieve animal data and employee data from an API being served by json-server on port 5002.

// so it's basically saying once the component mounts we are taking data from json and setting them as properties on the state

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/locations")
        .then(r => r.json())
        .then(locations => newState.locations = locations)
        .then(() => fetch("http://localhost:5002/animals")
        .then(r => r.json()))
        .then(animals => newState.animals = animals)
        .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5002/owners")
        .then(r => r.json()))
        .then(owners => newState.owners = owners)
        .then (() => this.setState(newState))
    }



    // You will notice the use of <React.Fragment />. That is simply a React wrapper around your old friend document.createDocumentFragment(). What this does is prevent unnecessary <div>, <article>, or <section> tags from being created.

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} /> 
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />   
            </React.Fragment>
        )
    }
}



