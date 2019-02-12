import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './autocomplete.css';

class LocationSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      latLng: ''
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLngRes => {
        this.setState({ latLng: latLngRes })
        this.props.latLong(this.state.latLng, address)
      })
      .catch(error => console.error('Error', error));
    this.setState({ address: address });
  };

  handleCloseClick = () => {
    this.setState({ address: '' });
  };

  render() {
    const searchOptions = {
      types: ['(cities)'],
      componentRestrictions: { 'country': 'us' }
    }
    return (

      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="input-group">
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  id: 'citySearch',
                  type: 'text',
                  className: 'form-control'

                })}
              />
              {this.state.address.length > 0 && (
                <div className="input-group-append">
                  <button className="btn btn-outline-dark" onClick={this.handleCloseClick}>X</button>
                </div>
              )}
            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;