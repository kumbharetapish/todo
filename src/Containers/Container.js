import React, { Component } from "react";
import ContainerStyle from "./Container.module.css";
import Time from "../Components/Time/Time";
import Input from "../Components/Input/Input";
import TodoInput from "../Components/Todo/Activity/Todo_input";
import Todolist from "../Components/Todo/Todolist/Todolist";
import { CURRENT_TIME } from "../Utils/Variable";
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "morningImage",
      showTodo: true,
      dayWish: "",
      status: localStorage.getItem("status") !== null ? false : true,
      inputName: "",
      msg:
        localStorage.getItem("name") !== null
          ? localStorage.getItem("name")
          : null,
      time: new Date().toLocaleString().split(" ")[1]
    };
  }

  gteTime = () => {
    setInterval(() => {
      let time = new Date().toLocaleString().split(" ")[1];
      this.setState({ time: time });
    }, 1000);
  };

  componentDidMount() {
    this.gteTime();
    console.log(this.state.time.split(":")[0]);

    if (
      this.state.time.split(":")[0] >= 4 &&
      this.state.time.split(":")[0] <= 11
    ) {
      this.setState({ img: "morningImage", dayWish: "Good Morning" });
    } else if (
      this.state.time.split(":")[0] <= 12 &&
      this.state.time.split(":")[0] <= 16
    ) {
      console.log("Noon");

      this.setState({ img: "noonImage", dayWish: "Good Afternoon" });
    } else if (
      this.state.time.split(":")[0] >= 17 &&
      this.state.time.split(":")[0] <= 20
    ) {
      this.setState({ img: "eveningImage", dayWish: "Good Evening" });
    } else if (
      this.state.time.split(":")[0] <= 21 &&
      this.state.time.split(":")[0] <= 24
    ) {
      console.log("night");
      this.setState({ img: "nightImage", dayWish: "Good Night" });
    }
  }
  submitResponse = e => {
    e.preventDefault();
    console.log(this.state.status);

    localStorage.setItem("name", this.state.inputName);
    localStorage.setItem("status", false);
    this.setState({ inputName: "", status: false });
  };

  getValue = e => {
    this.setState({ inputName: e.target.value });
  };
  showTodoList = () => {
    this.setState({ showTodo: !this.state.showTodo });
  };

  render() {
    const dayWish = this.state.status ? (
      <h3 className={ContainerStyle.dayWish}>{this.state.dayWish}</h3>
    ) : null;
    return (
      <div className={`${ContainerStyle[this.state.img]}`}>
        <Time msg={this.state.msg} currentTime={this.state.time}></Time>
        {dayWish}
        {this.state.status ? (
          <Input
            placeHolder={"Name"}
            inputValue={this.state.inputName}
            status={this.state.status}
            getValue={this.getValue}
            submitResponse={this.submitResponse}
          >
            <h2 className={ContainerStyle.welcomeName}>
              What do you like to be called?
            </h2>
          </Input>
        ) : (
          <TodoInput placeHolder={"Add Today Activity"}>
            <h3 className={ContainerStyle.dayWish}>
              {this.state.dayWish} {this.state.msg}
            </h3>
          </TodoInput>
        )}
        {this.state.showTodo ? null : <Todolist />}
        <div className={ContainerStyle.addTodo} onClick={this.showTodoList}>
          ADD TODO
        </div>
      </div>
    );
  }
}

export default Container;
