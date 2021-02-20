import {Component  } from "react";
import "./Nav.css";


export default class Nav extends Component {
    constructor(props){
        super(props)

    }


    render(){
        const {data, handleSetAswer}= this.props

        return(
            <ul className="Nav-ul">
            {data.map((el, index)=>{
                return <li className="Nav-ul-item"
               onClick={() => handleSetAswer(el[index],index)}>
                {el[0].nav} {console.log('nav '+ el[0].nav) } </li>}
              )}
{}
            </ul>
        )
    }
}