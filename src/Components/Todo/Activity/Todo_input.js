import React, { Component } from "react";
import todoInputStyle from "./TodoInput.module.css";
class Todo_input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNote: {
        note: "",
        key: ""
      },

      todayNote:
        localStorage.getItem("TodoAct") === null
          ? {}
          : JSON.parse(localStorage.getItem("TodoAct")),
      inputName: "",
      checkBit: localStorage.getItem("checkBit") === null ? true : false,

      items:
        localStorage.getItem("todoList") === null
          ? []
          : JSON.parse(localStorage.getItem("todoList"))
    };

    console.log(Boolean(localStorage.getItem("checkBit")));
  }



  handleTodayTodo = e => {
    e.preventDefault();
    localStorage.setItem("checkBit", !this.state.checkBit);
    localStorage.setItem("TodoAct", JSON.stringify(this.state.currentNote));

    this.setState({
      ...this.state,
      todayNote: this.state.currentNote,
      checkBit: !this.state.checkBit,
      currentNote: { key: "", note: "" }
    });
  };

  handleInput = e => {
    this.setState({
      currentNote: {
        key: new Date().toLocaleTimeString(),
        note: e.target.value
      }
    });
  };
  deleteNote(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    localStorage.setItem("todoList", JSON.stringify(filteredItems));
    this.setState({
      items: filteredItems
    });
  }

  deleteTodayNote = () => {
    localStorage.removeItem("TodoAct");
    localStorage.removeItem("checkBit");
    this.setState({ checkBit: !this.state.checkBit, todayNote: {} });
  };

  render() {
    return (
      <div className={todoInputStyle.wrapper}>
        {this.state.checkBit ? (
          <div>
            {this.props.children}
            <h2 className={todoInputStyle.welcomeName}>
              What's your main focus today?{" "}
            </h2>
            <form
              className={todoInputStyle.inputWrapper}
              onSubmit={this.handleTodayTodo}
            >
              <input
                type="text"
                value={this.state.currentNote.note}
                onInput={this.handleInput}
                placeholder={this.props.placeHolder}
                className={todoInputStyle.inputFiled}
              ></input>
            </form>
          </div>
        ) : (
          <div className={todoInputStyle.wrapper}>
            {this.props.children}
            <div className={todoInputStyle.ActWrapper}>
                <label className={todoInputStyle.activity}>
                  {this.state.todayNote.note}
                  <input type="checkbox" name="this.state.todayNote.note" />
                  <span className={todoInputStyle.checkmark}></span>
                </label>
            
              <button
                className={todoInputStyle.deleteActivity}
                onClick={this.deleteTodayNote}
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Todo_input;
