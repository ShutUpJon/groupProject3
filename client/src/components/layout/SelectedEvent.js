import React, { Component, Fragment } from "react";
import { Container } from 'react-bootstrap';
import axios from "axios";
import Hotels from "./Hotels";
import Moment from "react-moment";

class SelectedEvent extends Component {
  state = {
    nearbyHotels: []
  }

  componentDidMount() {
    let queryURL = encodeURI(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDPmxGsaHT-silFQUJO898ABopWlQswjB8&location=${this.props.selectedEvent._embedded.venues[0].location.latitude},${this.props.selectedEvent._embedded.venues[0].location.longitude}&radius=3500&type=lodging`)

    axios.get(queryURL)
      .then(res => {
        console.log(res.data);
        const hotels = res.data.results.map(obj => obj);
        this.setState({ nearbyHotels: hotels });
      });
  }

  render() {

    const {
      dates,
      images,
      name,
      _embedded,
      url
    } = this.props.selectedEvent
    return (
      <Container fluid className="text-center">
        <Fragment>
          <div>
            <h1>{name}</h1>
            <h3>{_embedded.venues[0].name}</h3>
            <h4>
              <Moment format="dddd, MMM D, YYYY">
                {dates.start.localDate}
              </Moment>
              <br></br>
              <Moment format="h:mm A">
                {dates.start.dateTime}
              </Moment>   
            </h4>
            <h4><img src={images[0].url} alt={name}></img></h4>
            <a href={url} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-dark">Buy Tickets</button></a>
          </div>
          <div>
            {this.state.nearbyHotels && <Hotels hotels={this.state.nearbyHotels} />}
          </div>
        </Fragment>
      </Container>
    );
  }
};

export default SelectedEvent;