import React, {Component} from 'react'

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
      <h2>Employee List</h2>
        {this.props.employees.map(employee =>
            <div key={employee.id}>
               <li> {employee.name} </li>
            </div>
         )
        }
      </section>
    )
  }
}


