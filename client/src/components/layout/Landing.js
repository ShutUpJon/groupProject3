import React, { Component } from "react";
import CustomCarousel from './../Carousel/Carousel';
import CustomJumbotron from './../Jumbotron/Jumbotron';
import CustomCard from './../Card/Card';

class Landing extends Component {
  render() {
    return (
      <div>
        <CustomCarousel />
        <CustomJumbotron />
        <CustomCard />

      </div>
    );
  }
}

export default Landing;
