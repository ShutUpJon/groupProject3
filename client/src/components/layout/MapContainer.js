import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '500px',
      height: '500px'
    }

    return (
      
      <Map 
        style={style} 
        google={this.props.google} 
        zoom={10}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}
        >
        

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDPmxGsaHT-silFQUJO898ABopWlQswjB8")
})(MapContainer)