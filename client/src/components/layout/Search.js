import React, { Component, Fragment } from 'react';
import LocationSearchInput from './Autocomplete';
import Footer from './../Footer/Footer';
import { Container } from 'react-bootstrap';
import './search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      latLng: '',
      city: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchParams(this.state);
  }

  handleArtistChange = (event) => {
    this.setState({ artist: event.target.value });
  }

  handleCityChange = (cityLatLng, city) => {
    this.setState({
      latLng: cityLatLng.lat + "," + cityLatLng.lng,
      city: city
    });
  }
  render() {
    return (
      <Fragment>
        <Container className="search-box">
          <div>
            <div className="row">
              <form className="col s12 align-center" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <h2><label htmlFor="artistSearch">Artist</label></h2>
                  <input type="text" className="form-control" id="artistSearch" placeholder="Enter artist" value={this.state.artist} onChange={this.handleArtistChange}></input>
                </div>
                <div className="form-group">
                  <h2><label htmlFor="citySearch">City</label></h2>
                  <LocationSearchInput latLong={(latLng, city) => this.handleCityChange(latLng, city)} />
                </div>
                <button type="submit" className="btn btn-outline-dark">Search</button>
              </form>
            </div>
          </div>
          <br />
        </Container>
      </Fragment>
    )
  }
}

export default Search;
