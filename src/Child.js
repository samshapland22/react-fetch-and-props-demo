import React from "react";

class Child extends React.Component {
  render() {
    //check the console to see what "this.props" looks like. it's just an object.
    //you can add more things to this.props by going into the parent component (App)
    //and passing more props to this child component (Child).
    console.log("this.props from the Child component: ", this.props);

    let petsToDisplay = this.props.petsData.map((pet) => {
      return `${pet.name}, `;
    });

    return (
      <div>
        <p>secret number: {this.props.secretNumber}</p>{" "}
        <p>secret word: {this.props.secretWord}</p>
        <h3>list of pets' names: </h3>
        <p>{petsToDisplay}</p>
      </div>
    );
  }
}

export default Child;
