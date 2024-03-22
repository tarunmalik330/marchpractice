import React, { Component } from "react";
import Countertime from "./Countertime.jsx";

class TimerCount extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "october, 19, 2024" };
  }
  render() {
    return (
      <div>
        <Countertime deadline={this.state.deadline} />
      </div>
    );
  }
}
export default TimerCount;
