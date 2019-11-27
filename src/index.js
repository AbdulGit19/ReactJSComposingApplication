import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import "bootstrap/dist/css/bootstrap.css";

//import { ActionButton } from "./ActionButton";
//import { Message } from "./Message";
//import { ThemeSelector } from "./ThemeSelector";

import { GeneralList } from "./GeneralList";
import { SortedList } from "./SortedList";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //counter: 0
      names: ["Zoe", "Bob", "Alice", "Dora", "Joe"]
    };
  }

  // incrementCounter = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  // render() {
  //   return (
  //     <div className="m-2 text-center">
  //       <ThemeSelector>
  //         <Message theme="primary" message={`Counter: ${this.state.counter}`} />
  //         <ActionButton
  //           theme="secondary"
  //           text="Increment"
  //           callback={this.incrementCounter}
  //         />
  //       </ThemeSelector>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <GeneralList list={this.state.names} theme="primary" />
          </div>
          <div className="col-6">
            <SortedList list={this.state.names} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
