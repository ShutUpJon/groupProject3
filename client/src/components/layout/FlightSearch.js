import React, { Component } from 'react';
import Footer from './../Footer/Footer';
import { Container } from 'react-bootstrap';
import './search.css';
import axios from 'axios';

class FlightSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      departureDate: '',
      returnDate: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let queryURL = encodeURI(`https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${this.state.origin}-sky/${this.state.destination}-sky/${this.state.departureDate}?inboundpartialdate=${this.state.returnDate}`);
    let redirectURL = encodeURI(`http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/${this.state.origin}/${this.state.destination}/${this.state.departureDate}/${this.state.returnDate}?apiKey=nceTBXHOAqmsh2yeXTIa0OjtEj6hp11hvbejsn3kBSTtVqS8TT`);
    console.log(redirectURL);
    axios.get(queryURL, {
      headers: {
        "X-RapidAPI-Key": "nceTBXHOAqmsh2yeXTIa0OjtEj6hp11hvbejsn3kBSTtVqS8TT",
      }
    })
    .then(function (result) {
      console.log(result);
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Container className="search-box">
        <div>
          <div className="row">
            <form className="col s12 align-center" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <h2><label for="artistSearch">Flying From:</label></h2>
                <input type="text" className="form-control" name="origin" placeholder="Enter airport code" value={this.state.origin} onChange={this.handleChange}></input>
              </div>
              <div className="form-group">
                <h2><label for="artistSearch">Flying To:</label></h2>
                <input type="text" className="form-control" name="destination" placeholder="Enter airport code" value={this.state.destination} onChange={this.handleChange}></input>
              </div>
              <div className="form-group">
                <h2><label for="artistSearch">Departing:</label></h2>
                <input type="date" className="form-control" name="departureDate" placeholder="When are you leaving?" value={this.state.departureDate} onChange={this.handleChange}></input>
              </div>
              <div className="form-group">
                <h2><label for="artistSearch">Returning:</label></h2>
                <input type="date" className="form-control" name="returnDate" placeholder="When are you coming back?" value={this.state.returnDate} onChange={this.handleChange}></input>
              </div>
              <button type="submit" className="btn btn-outline-dark">Search</button>
            </form>
          </div>
        </div>
        <Footer />
      </Container>
    )
  }
}

export default FlightSearch;
