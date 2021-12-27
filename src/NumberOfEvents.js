import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 16,
  };

  render() {
    return (
      <div>
        <p>Change number of shown events</p>
        <input
          type="number"
          value={this.state.numberOfEvents}
          className="newValue"
        />
      </div>
    );
  }
}

export default NumberOfEvents;
