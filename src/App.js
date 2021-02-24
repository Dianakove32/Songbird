import React, { Component } from "react";
import Answers from "./components/Answers";
import Info from "./components/Info";
import Nav from "./components/Nav";
import birdsData from "./data";

export default class App extends Component {
  constructor() {
    super();
    // this.handleSetAswer=this.handleSetAswer.bind(this)
    this.state = {
      pickedAnswer: birdsData[0],
      pickedInfo: ''
    };
    this.handleSetAnswer = this.handleSetAnswer.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
  }

  handleSetAnswer(index) {
    this.setState({
      pickedAnswer: birdsData[index],
    });

  }


  handleInfo(nameBird){

      const findAnswer = this.state.pickedAnswer.find((el) => el.id===nameBird  )
console.log(findAnswer)
      this.setState({
       ...this.state,
       pickedInfo: findAnswer
     })
 }
  render() {
   // console.log( this.state.pickedAnswer   )
    const { pickedAnswer,pickedInfo} = this.state;
    const handleSetAnswer = this.handleSetAnswer;
    const handleInfo = this.handleInfo
    return (
      <div className="App">
        <h1>Songbird</h1>
        <Nav data={birdsData} handleSetAnswer={handleSetAnswer} />
        <Answers data={pickedAnswer}  handleInfo={handleInfo}/>
         <Info data={pickedInfo}

       />
      </div>
    );
  }
}
