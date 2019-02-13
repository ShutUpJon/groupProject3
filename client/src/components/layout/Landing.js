import React, { Component } from "react";
import CustomCarousel from './../Carousel/Carousel';
import CustomJumbotron from './../Jumbotron/Jumbotron';
import CustomCard from './../Card/Card';
import CustomImage from './../Image/Image';
import About from './../About/About';


class Landing extends Component {
  render() {
    return (
      <div>
        <CustomCarousel />
        <CustomJumbotron />
        <br />
        <CustomCard />
        <br />
        <CustomImage />
        <About />
        <br />
      </div>
    );
  }
}

export default Landing;
