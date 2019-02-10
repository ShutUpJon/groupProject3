import React, { Component, Fragment } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import SelectedEvent from "./SelectedEvent";
import Footer from './../Footer/Footer';
import './events.css';
import { withRouter } from 'react-router-dom';
import Moment from "react-moment";

class Events extends Component {
  state = {
    events: [],
    selectedEvent: ""
  }

  componentDidMount() {
    if (!this.props.artist && !this.props.city) {
      this.props.history.push(`/search`);
    }
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
    this.setState({ selectedEvent: this.state.events[event.target.id]})
  }

  handleBack = (event) => {
    event.preventDefault();
    this.setState({ selectedEvent: "" });
  }

  handleGoToFlights = (event) => {
    this.props.history.push(`/flights`);
  }

  render() {
    return (
      <Container className="events-page">
        <div>
          {this.state.selectedEvent ? (
            <Fragment>
              <button onClick={this.handleBack} className="btn btn-outline-dark">Back to All Events</button>
              <button onClick={this.handleGoToFlights} className="btn btn-outline-dark">Search For Flights</button>
              <SelectedEvent selectedEvent={this.state.selectedEvent} />
            </Fragment>
          ) : (
              <Fragment>
                    <h1>{`${this.props.artist}`}</h1>
                    <ul >
                      {this.state.events.map((event, index) =>
                        <li key={event.id}>
                        <Row>
                        <Col lg={10} md={10} sm={10}>
                          <Moment format="MMM D, YYYY">{event.dates.start.localDate}</Moment> - {event.name} - {event._embedded.venues[0].name} - {event._embedded.venues[0].city.name}, {event._embedded.venues[0].state.name}
                          </Col>
                          <Col lg={2} md={2} sm={2}>
                          <button onClick={this.handleClick} id={index} className="btn btn-outline-dark">Select Event</button>
                          </Col>
                          </Row>
                        </li>
                      )}
                    </ul>
              </Fragment>
            )}
          <Footer />
        </div>
      </Container>
    );
  }
};

export default withRouter(Events);