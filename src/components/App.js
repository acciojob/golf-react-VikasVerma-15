import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderBall: false,
      position: 0
    };

    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

 renderBallOrButton() {
  if (this.state.renderBall) {
    return (
      <div
        className="ball"
        style={{ left: `${this.state.position}px` }}
      ></div>
    );
  } else {
    return (
      <button
        className="start"
        onClick={() => this.buttonClickHandler()}
      >
        Start
      </button>
    );
  }
}


  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.keyCode === 39 && this.state.renderBall) {
      this.setState((prevState) => ({
        position: prevState.position + 5
      }));
    }
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;
