import React, { Component } from "react";
import Answers from "./components/Answers";
import Nav from "./components/Nav";
import birdsData from "./data";

export default class App extends Component {
  constructor() {
    super();
    // this.handleSetAswer=this.handleSetAswer.bind(this)
    this.state = {
      pickedAnswer: birdsData[0],
    };
    this.handleSetAnswer = this.handleSetAnswer.bind(this);
  }

  handleSetAnswer(index) {
    this.setState({
      pickedAnswer: birdsData[index],
    });
  }

  render() {
    const { pickedAnswer } = this.state;
    const handleSetAnswer = this.handleSetAnswer;
    return (
      <div className="App">
        <h1>Songbird</h1>
        <Nav data={birdsData} handleSetAnswer={handleSetAnswer} />
        <Answers data={pickedAnswer} />
      </div>
    );
  }
}
