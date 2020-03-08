import React, { Component } from "react";
import Container from "./Containers/Container";
import "./App.css";

class App extends Component {
  state = { counter: 0 };

  shouldComponentUpdate() {}
  render() {
    return <Container />;
  }
}

export default App;
