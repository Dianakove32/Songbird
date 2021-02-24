import "./Nav.css";
import React, { Component } from "react";

export default class Answers extends Component {
  constructor(props) {
    super(props);
  }

    // onClick(cfgh){
    //   console.log(cfgh )
    // }
  render() {
    const { data,handleInfo   } = this.props;


    return (
      <div>
        {data.map((el) => {
          return <div onClick= {()=> handleInfo(el.id)}
           >{el.name} </div>;
        })}
      </div>
    );
  }
}
