import React, { Component } from "react";
import CurrencyConverter from "./components/CurrencyConverter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.sayHello();
    });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Welcome to the event handler example.");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handlePress = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Event Handling Example</h1>
        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.increment}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>

        <br />
        <br />
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <br />
        <br />
        <button onClick={this.handlePress}>Click Me</button>

        <br />
        <br />
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
