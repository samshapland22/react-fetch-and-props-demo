import React from "react";
import "./App.css";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      employees: [],
    };
  }

  //.then SYNTAX FOR ASYNCHRONOUS CODE:
  // fetchPets = () => {
  //   fetch("https://vet-api-8-1.herokuapp.com/api/pets")
  //     .then((res) => {
  //       console.log("res", res);
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("data", data);
  //       this.setState({
  //         pets: data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // };

  // fetchEmployees = () => {
  //   fetch("https://vet-api-8-1.herokuapp.com/api/employees")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       this.setState({
  //         employees: data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // };

  //async/await SYNTAX FOR ASYNCHRONOUS CODE:
  fetchPets = async () => {
    try {
      const res = await fetch("https://vet-api-8-1.herokuapp.com/api/pets");
      const data = await res.json();
      this.setState({
        pets: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchEmployees = async () => {
    try {
      const res = await fetch(
        "https://vet-api-8-1.herokuapp.com/api/employees"
      );
      const data = await res.json();
      this.setState({
        employees: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchPets();
    this.fetchEmployees();
  };

  render() {
    let secretNumber = 5;

    return (
      <div className="App">
        <h1>Fetch and Props Demo</h1>
        <Child
          //pass props to the Child component here. try passing the array of employees down too.
          secretNumber={secretNumber}
          secretWord={"dolphin"}
          petsData={this.state.pets}
        />
      </div>
    );
  }
}

export default App;
