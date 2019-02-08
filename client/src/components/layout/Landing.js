import React, { Component } from "react";
import LocationSearchInput from './Autocomplete';
import CustomCarousel from './../Carousel/Carousel';
import CustomJumbotron from './../Jumbotron/Jumbotron';
import CustomCard from './../Card/Card';

class Landing extends Component {

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
    this.setState({artist: event.target.value});
  }

  handleCityChange = (cityLatLng) => {
    this.setState({ latLng: cityLatLng.lat + "," + cityLatLng.lng});
  }

  render() {
    return (
      <div>
        <CustomCarousel />
        <CustomJumbotron />
        <CustomCard />
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <form className="col s12 align-center" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="artistSearch">Artist</label>
                <input type="text" className="form-control" id="artistSearch" placeholder="Enter artist" value={this.state.artist} onChange={this.handleArtistChange}></input>
              </div>
              <div className="form-group">
                <label for="citySearch">City</label>
                <LocationSearchInput latLong={(latLng) => this.handleCityChange(latLng)}/>
              </div>
              <button type="submit" className="btn btn-primary waves-effect waves-light hoverable">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
