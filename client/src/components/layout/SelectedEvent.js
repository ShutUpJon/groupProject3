import React, { Component } from "react";

class SelectedEvent extends Component {
  
  render() {
    const {
      dates,
      images,
      name,
      _embedded
    } = this.props.selectedEvent
    return (
      <div>
        <h1>{name}</h1>
        <h3>{_embedded.venues[0].name}</h3>
        <h4>{dates.start.dateTime}</h4>
        <h4><img src={images[0].url} alt={name}></img></h4>
      </div>
    );
  }
};

export default SelectedEvent;