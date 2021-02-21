import { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, handleSetAnswer } = this.props;

    return (
      <ul className="Nav-ul">
        {data.map((el, index) => {
          return (
            <li className="Nav-ul-item" onClick={() => handleSetAnswer(index)}>
              {el[0].nav}
            </li>
          );
        })}
        {}
      </ul>
    );
  }
}
