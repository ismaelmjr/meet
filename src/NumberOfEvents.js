import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 16,
    errorText: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 16) {
      this.setState({
        numberOfEvents: "",
        errorText: "Please enter a number between 1 and 16",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>
          <b>Number of Events:</b>
        </p>
        <input
          type="number"
          name="number"
          className="newValue"
          value={this.props.numberOfEvents}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
