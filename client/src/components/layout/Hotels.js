import React, { Component, Fragment } from "react";
import axios from "axios";
import FlightSearch from "./FlightSearch";

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
      <div>
        <h1>Hotels</h1>
        <ul>
          {this.props.hotels.map((hotel, index) =>
            <li data-key={hotel.id}>
              {hotel.name}<br></br>
              {this.state.selectedHotel.id === hotel.id ? (
                <Fragment>
                  {this.state.selectedHotel.formatted_address}
                </Fragment>
              ) : (
                <Fragment>
                  <button onClick={this.handleClick} id={index} className="btn btn-outline-dark waves-effect waves-light hoverable">Get More Info</button>
                </Fragment>
              )}
            </li>
          )}
        </ul>
      </div>
    );
  }
};

export default Hotels;