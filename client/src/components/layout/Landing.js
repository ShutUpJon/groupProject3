import React, { Component } from "react";
import CustomCarousel from './../Carousel/Carousel';
import CustomJumbotron from './../Jumbotron/Jumbotron';
import CustomCard from './../Card/Card';
import CustomImage from './../Image/Image';
import About from './../About/About';
import Footer from './../Footer/Footer';

class Landing extends Component {
  render() {
    return (
      <div>
        <CustomCarousel />
        <hr />
        <CustomJumbotron />
        <CustomCard />
        <br />
        <CustomImage />
        <About />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Landing;
