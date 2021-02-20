import React, { Component } from 'react'
import Answers from './components/Answers';
import Nav from "./components/Nav";
import birdsData from "./data";



export default class App extends Component {
  constructor(){
    super()
    // this.handleSetAswer=this.handleSetAswer.bind(this)
    this.state={
    pickedAnswer: birdsData[0]
  }

  }



// handleSetAswer(answerNav,ind){
//    let fhdshdfhd = birdsData[ind].find(x=>x.nav === answerNav);
//     this.setState({
//     pickedAnswer:fhdshdfhd
//   })
// }
  render() {
    const {pickedAnswer} = this.state
    const handleSetAswer=this.handleSetAswer
    return (

          <div className="App">
<h1>Songbird</h1>
<Nav data={birdsData} handleSetAswer={handleSetAswer}/>
<Answers data={pickedAnswer} />
    </div>

    )
  }

}


