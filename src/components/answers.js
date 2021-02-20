
import "./Nav.css";
import React, { Component } from 'react'


export default class Answers extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {data }= this.props
        console.log(data  )
        return (
            <div>
{data.map((el )=> {
    return <div >{el.name}   </div>
})}
            </div>
        )
    }
}
