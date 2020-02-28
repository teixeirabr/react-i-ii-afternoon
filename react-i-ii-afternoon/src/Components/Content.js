import React, { Component } from "react";
import data from "../data";
// import Person from "./Person";
// import "../App.css";

export default class Button extends Component {
  constructor() {
    super();

    this.state = {
      index: 0
    };
  }

  handleNext = () => {
    this.setState({
      index: this.state.index === 24 ? 0 : this.state.index + 1
    });
  };

  handlePrevious = () => {
    this.setState({
      index: this.state.index === 0 ? 24 : this.state.index - 1
    });
  };

  render() {
    let person = data[this.state.index];

    return (
      <div>
        <div>
          <section>
            <h1>{data[this.state.index].id}/25</h1>
            <h1>
              {data[this.state.index].name.first} {""}
              {data[this.state.index].name.last}
            </h1>
            <h1> From: {data[this.state.index].city}</h1>
            <h1> Job Title: {data[this.state.index].title}</h1>
            <h1> Employer: {data[this.state.index].employer}</h1>
            <h1>Favorite Movies:</h1>
            <ol>
              <li>{data[this.state.index].favoriteMovies[0]}</li>
              <li>{data[this.state.index].favoriteMovies[1]}</li>
              <li>{data[this.state.index].favoriteMovies[2]}</li>
            </ol>
          </section>
          <section>
            <button onClick={this.handlePrevious}>Previous</button>
            <button>Edit</button>
            <button>Delete</button>
            {/* <button>New</button> */}
            <button onClick={this.handleNext}>Next</button>
          </section>
        </div>
      </div>
    );
  }
}
