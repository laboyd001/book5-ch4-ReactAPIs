import React, {Component} from 'react'

// This component will return an HTML representation of the owner list
export default class OwnerList extends Component {
  render() {
    return (
      <section className="owners">
      <h2>Owner List</h2>
        {this.props.owners.map(owner =>
            <div key={owner.id}>
               <p> Name: {owner.name}</p>
               <p> Phone: {owner.phone} </p>
                <br></br>
            </div>
         )
        }
      </section>
    )
  }
}

