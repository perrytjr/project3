import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

import defaultUsers from "../../users";

const params = new URLSearchParams(window.location.search);

// for (const param of params) {
//   console.log(param);
// }

class TinderCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: defaultUsers,
    };
    // // let newPerson = {},
    // //   peopleCopy = this.state.people;

    // // for (const [key, value] of params.entries()) {
    // //   // console.log(key + ':' + value)
    // //   newPerson[key] = value;
    // // }
    // // newPerson.picture = null;
    // // peopleCopy.push(newPerson);

    // this.setState({ people: peopleCopy });
  }

  componentDidMount() {
    let newPerson = {},
      peopleCopy = this.state.people;

    for (const [key, value] of params.entries()) {
      // console.log(key + ':' + value)
      newPerson[key] = value;
    }
    
    peopleCopy.push(newPerson);

    this.setState({ people: peopleCopy });
  }

  render() {
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

  // same as this vvv
  // const people =[];
  // people.push("watever")

  //(push to an array in React)
  // setPeople([..people])
  // debugger;
}
export default TinderCards;
