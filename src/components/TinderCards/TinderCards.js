import React from "react";
import TinderCard from "react-tinder-card";
import { ProfileContext } from '../../ProfileContext';
import "./TinderCards.css";
<<<<<<< HEAD
  
export default class TinderCards extends React.PureComponent {
  static contextType = ProfileContext;
    
  state = {
    people: []
  }
    
=======

export default class TinderCards extends React.PureComponent {
  static contextType = ProfileContext;

  state = {
    people: []
  }

>>>>>>> main
  componentDidMount() {
    const { users } = this.context;
    this.setState({ people: users });
  }
<<<<<<< HEAD
    
=======

>>>>>>> main
  render() {
    console.log('render people: ', this.state.people);
    return (
      <div>
        <div className="tinderCards__cardContainer">
          {this.state.people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.picture})` }}
                className="card"
              >
                <h3>{person.name}</h3>
                <h3>{person.age}</h3>
                <h3>{person.activities}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    );
  }
<<<<<<< HEAD
    
  // same as this vvv
  // const people =[];
  // people.push("watever")
    
  //(push to an array in React)
  // setPeople([..people])
  // debugger;
}
=======

  // same as this vvv
  // const people =[];
  // people.push("watever")

  //(push to an array in React)
  // setPeople([..people])
  // debugger;
}

>>>>>>> main
