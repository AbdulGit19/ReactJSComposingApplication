import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import "bootstrap/dist/css/bootstrap.css";

import { ActionButton } from "./ActionButton";
import { Message } from "./Message";
import { ThemeSelector } from "./ThemeSelector";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="m-2 text-center">
        <ThemeSelector>
          <Message theme="primary" message={`Counter: ${this.state.counter}`} />
          <ActionButton
            theme="secondary"
            text="Increment"
            callback={this.incrementCounter}
          />
        </ThemeSelector>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
