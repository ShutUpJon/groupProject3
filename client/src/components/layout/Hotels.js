import React, { Component, Fragment } from "react";
import { Container } from 'react-bootstrap';
import axios from "axios";
import './hotels.css';

class Hotels extends Component {
  state = {
    selectedHotel: {}
  }

  handleClick = (event) => {
    event.preventDefault();
    let queryURL = encodeURI(`https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDPmxGsaHT-silFQUJO898ABopWlQswjB8&placeid=${this.props.hotels[event.target.id].place_id}`);
    console.log(queryURL);

    axios.get(queryURL)
      .then(res => {
        console.log(res.data);
        this.setState({ selectedHotel: res.data.result });
      });
    console.log(this.state.selectedHotel);
  }

  render() {

    return (
      <Fragment>
        <Container>
          <div>
            <h1>Hotels</h1>
            <ul className="concert-events-container">
              {this.props.hotels.map((hotel, index) =>
                <li key={index} data-key={hotel.id}>
                  <p className="hotel-name">
                    {hotel.name}
                  </p>
                  {this.state.selectedHotel.id === hotel.id ? (
                    <Fragment>
                      <p>
                        {this.state.selectedHotel.formatted_address}
                      </p>
                      <p>
                        Rating: {this.state.selectedHotel.rating}
                      </p>
                      <p>
                        <a href={this.state.selectedHotel.website} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-dark">Book This Hotel</button></a>
                      </p>
                    </Fragment>
                  ) : (
                      <Fragment>
                        <button onClick={this.handleClick} id={index} className="btn btn-outline-dark">Get More Info</button>
                      </Fragment>
                    )}
                </li>
              )}
            </ul>
          </div>
        </Container>
      </Fragment>
    );
  }
};

export default Hotels;