import React, { Component } from "react";
import timeStyle from "./Time.module.css";

class Time extends Component {
  render() {
    return (
      <div className={timeStyle.timeWrapper}>
        <h1 className={timeStyle.time}>{this.props.currentTime} </h1>
      </div>
    );
  }
}

export default Time;
