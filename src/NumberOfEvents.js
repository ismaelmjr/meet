import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 16,
  };

  handleChange = (event) => {
    this.setState({
      numberOfEvents: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <p className="heading">Change number of shown events</p>
        <input
          type="number"
          value={this.state.numberOfEvents}
          className="newValue"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
