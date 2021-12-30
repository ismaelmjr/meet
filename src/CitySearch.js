import React, { Component } from "react";

class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      suggestions: [],
      showSuggestions: undefined,
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          className="city"
          type="text"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />

        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;

// Mock Data
{
  /* "items": [
  {
   "kind": "calendar#event",
   "etag": "\"3181161784712000\"",
   "id": "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
   "created": "2020-05-19T19:17:46.000Z",
   "updated": "2020-05-27T12:01:32.356Z",
   "summary": "Learn JavaScript",
   "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
   "location": "London, UK",
   "creator": {
    "email": "fullstackwebdev@careerfoundry.com",
    "self": true
   },
   "organizer": {
    "email": "fullstackwebdev@careerfoundry.com",
    "self": true
   },
   "start": {
    "dateTime": "2020-05-19T16:00:00+02:00",
    "timeZone": "Europe/Berlin"
   },
   "end": {
    "dateTime": "2020-05-19T17:00:00+02:00",
    "timeZone": "Europe/Berlin"
   },
   "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
   "originalStartTime": {
    "dateTime": "2020-05-19T16:00:00+02:00",
    "timeZone": "Europe/Berlin"
   },
   "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   },
   "eventType": "default"
  },
  {
   "kind": "calendar#event",
   "etag": "\"3181159875584000\"",
   "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
   "created": "2020-05-19T19:14:30.000Z",
   "updated": "2020-05-27T11:45:37.792Z",
   "summary": "React is Fun",
   "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
   "location": "Berlin, Germany",
   "creator": {
    "email": "fullstackwebdev@careerfoundry.com",
    "self": true
   },
   "organizer": {
    "email": "fullstackwebdev@careerfoundry.com",
    "self": true
   },
   "start": {
    "dateTime": "2020-05-20T14:00:00+02:00",
    "timeZone": "Europe/Berlin"
   },
   "end": {
    "dateTime": "2020-05-20T15:00:00+02:00",
    "timeZone": "Europe/Berlin"
   },
   "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
   "originalStartTime": {
    "dateTime": "2020-05-20T14:00:00+02:00",
    "timeZone": "Europe/Berlin"
   },
   "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   },
   "eventType": "default"
  },*/
}
