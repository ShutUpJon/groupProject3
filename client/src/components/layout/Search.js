import React, { Component } from 'react';
import LocationSearchInput from './Autocomplete';
import Footer from './../Footer/Footer';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      latLng: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchParams(this.state);
  }

  handleArtistChange = (event) => {
    this.setState({ artist: event.target.value });
  }

  handleCityChange = (cityLatLng) => {
    this.setState({ latLng: cityLatLng.lat + "," + cityLatLng.lng });
  }
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <form className="col s12 align-center" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="artistSearch">Artist</label>
              <input type="text" className="form-control" id="artistSearch" placeholder="Enter artist" value={this.state.artist} onChange={this.handleArtistChange}></input>
            </div>
            <div className="form-group">
              <label for="citySearch">City</label>
              <LocationSearchInput latLong={(latLng) => this.handleCityChange(latLng)} />
            </div>
            <button type="submit" className="btn btn-outline-dark waves-effect waves-light hoverable">Search</button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    )
  }
}

export default Search;
