import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';

var carousel1 = require('./carousel1.jpeg');
var carousel2 = require('./carousel2.jpeg');
var carousel3 = require('./carousel3.jpeg');

class CustomCarousel extends Component {
     render() {
          return (
               <Carousel>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={carousel1}
                              alt="First slide"
                         />
                         <Carousel.Caption>
                              <h1>Welcome to Roadie</h1>
                              <h3>Concert. Flight. Hotel.</h3>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={carousel2}
                              alt="Third slide"
                         />

                         <Carousel.Caption>
                              <h1>Book Flights</h1>
                              <h3>Use Our App To Check Flights For Your Preferred Show.</h3>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={carousel3}
                              alt="Third slide"
                         />

                         <Carousel.Caption>
                              <h1>Book Lodging</h1>
                              <h3>Use Roadie to check on hotels closest to your venue of choice.</h3>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          )
     }
}

export default CustomCarousel;