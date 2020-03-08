import React, { Component } from "react";
import inputStyle from "./input.module.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: ""
    };
  }

  render() {
    return (
      <div className={inputStyle.wrapper}>
        {this.props.children}
        
        <form
          className={inputStyle.inputWrapper}
          onSubmit={this.props.submitResponse}
        >
          <input
            type="text"
            value={this.props.inputValue}
            onInput={this.props.getValue}
            placeholder={this.props.placeHolder}
            className={inputStyle.inputFiled}
          ></input>
        </form>
      </div>
    );
  }
}

export default Input;
