import React, { Component } from "react";
import axios from 'axios';

class Events extends Component {
  state = {
    events: []
  }

  componentDidMount() {
    let queryURL = "";
    if (this.props.artist && this.props.city) {
      queryURL = encodeURI(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=rQfy38E98IxqazSzP7PjGLbvIVDiHlUu&classificationName=Musickeyword=${this.props.artist}&latlong=${this.props.city}`);
    } else if (this.props.artist) {
      queryURL = encodeURI(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=rQfy38E98IxqazSzP7PjGLbvIVDiHlUu&classificationName=Music&keyword=${this.props.artist}`);
    } else if (this.props.city) {
      queryURL = encodeURI(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=rQfy38E98IxqazSzP7PjGLbvIVDiHlUu&classificationName=Music&latlong=${this.props.city}`);
    }
    console.log(queryURL);
    axios.get(queryURL)
      .then(res => {
        console.log(res.data);
        const events = res.data._embedded.events.map(obj => obj);
        this.setState({ events });
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.artist}`}</h1>
        <ul>
          {this.state.events.map(event =>
            <li key={event.id}>{event.name} - {event._embedded.venues[0].name} - {event._embedded.venues[0].city.name}, {event._embedded.venues[0].state.name} - {event.dates.start.localDate} {event.dates.start.localTime}</li>
          )}
        </ul>
      </div>
    );
  }
};

export default Events;