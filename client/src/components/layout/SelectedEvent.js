import React, { Component, Fragment } from "react";
import { Container } from 'react-bootstrap';
import axios from "axios";
import Hotels from "./Hotels";

class SelectedEvent extends Component {
  state = {
    nearbyHotels: []
  }

  componentDidMount() {
    let queryURL = encodeURI(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDPmxGsaHT-silFQUJO898ABopWlQswjB8&location=${this.props.selectedEvent._embedded.venues[0].location.latitude},${this.props.selectedEvent._embedded.venues[0].location.longitude}&rankby=distance&type=lodging`)

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
      _embedded
    } = this.props.selectedEvent
    return (
      <Container fluid className="text-center">
        <Fragment>
          <div>
            <h1>{name}</h1>
            <h3>{_embedded.venues[0].name}</h3>
            <h4>{dates.start.dateTime}</h4>
            <h4><img src={images[0].url} alt={name}></img></h4>
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