import React, {Component} from 'react'

// this is the HTML representation of the animal list
export default class AnimalList extends Component {
  render() {
    return (
      <section className="animals">
        <h2>Animal List</h2>
        {this.props.animals.map(animal =>
            <div key={animal.id}>
               <li> {animal.name} </li>
            </div>
         )
        }
      </section>
    )
  }
}

