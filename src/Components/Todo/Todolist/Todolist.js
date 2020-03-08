import React, { Component } from "react";
import listStyle from "./Todolist.module.css";
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNote: {
        note: "",
        key: ""
      },
      items:
        localStorage.getItem("todoList") === null
          ? []
          : JSON.parse(localStorage.getItem("todoList"))
    };
  }
  handleTodo = e => {
    e.preventDefault();
    const newItem = this.state.currentNote;
    if (newItem.note !== "") {
      const items = [...this.state.items, newItem];
      localStorage.setItem("todoList", JSON.stringify(items));
      this.setState({
        items: items,
        currentNote: { note: "", key: "" }
      });
    }
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

  render() {
    const list = this.state.items.map(data => {
      return (
        <div key={data.key} className={listStyle.ActWrapper}>
          <label className={listStyle.list}>
            <input
              className={listStyle.checkmark}
              type="checkbox"
              name={data.kye}
            />

            {data.note}
          </label>
          <button
            className={listStyle.delete}
            onClick={() => {
              this.deleteNote(data.key);
            }}
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      );
    });
    return (
      <div className={listStyle.listWrapper}>
        <form className={listStyle.inputWrapper} onSubmit={this.handleTodo}>
          <input
            type="text"
            value={this.state.currentNote.note}
            onInput={this.handleInput}
            placeholder="Add list "
            className={listStyle.inputFiled}
          ></input>
        </form>
        {list}
      </div>
    );
  }
}

export default Todolist;
