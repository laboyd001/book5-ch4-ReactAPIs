// This is a Controller Component. Its only responsibility to to control the behavior of the system. It maps URLs to components.

import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
// import OwnerList from './owner/OwnerList'


export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
        .then(r => r.json())
        .then(animals => newState.animals = animals)
        .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
        .then(employees => newState.employees = employees)
    }

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
            </React.Fragment>
        )
    }
}



/* <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} /> */