import React, { Component, Fragment } from "react";
import axios from 'axios';
import SelectedEvent from "./SelectedEvent";

class Events extends Component {
  state = {
    events: [],
    selectedEvent: ""
  }

  componentDidMount() {
    let queryURL = "";
    if (this.props.artist && this.props.city) {
      queryURL = encodeURI(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=rQfy38E98IxqazSzP7PjGLbvIVDiHlUu&classificationName=Music&keyword=${this.props.artist}&latlong=${this.props.city}`);
    } else if (this.props.artist) {
      queryURL = encodeURI(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=rQfy38E98IxqazSzP7PjGLbvIVDiHlUu&classificationName=Music&keyword=${this.props.artist}`);
    } else if (this.props.city) {
      queryURL = encodeURI(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=rQfy38E98IxqazSzP7PjGLbvIVDiHlUu&classificationName=Music&latlong=${this.props.city}`);
    }
    axios.get(queryURL)
      .then(res => {
        console.log(res.data);
        const events = res.data._embedded.events.map(obj => obj);
        this.setState({ events });
      });
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    this.setState({ selectedEvent: this.state.events[event.target.id]})
  }

  handleBack = (event) => {
    event.preventDefault();
    console.log("made it");
    this.setState({ selectedEvent: "" });
  }

  render() {
    return (
      <div>
        {this.state.selectedEvent ? (
        <Fragment>
          <SelectedEvent selectedEvent={this.state.selectedEvent}/>
          <button onClick={this.handleBack} className="btn btn-outline-dark waves-effect waves-light hoverable">Back to All Events</button>
        </Fragment>  
        ) : (
          <Fragment>
            <h1>{`${this.props.artist}`}</h1>
            <ul>
              {this.state.events.map((event, index) =>
                <li key={event.id}>
                  {event.name} - {event._embedded.venues[0].name} - {event._embedded.venues[0].city.name}, {event._embedded.venues[0].state.name} - {event.dates.start.localDate} {event.dates.start.localTime}<br></br>
                  <button onClick={this.handleClick} id={index} className="btn btn-outline-dark waves-effect waves-light hoverable">Select Event</button>
                </li>
              )}
            </ul>
          </Fragment>
        )}
        
      </div>
    );
  }
};

export default Events;