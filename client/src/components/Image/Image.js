import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import "./image.css";

var Image1 = require('./image1.jpeg');

class CustomImage extends Component {
     render() {
          return (
                    <Image src={Image1} fluid />
          )
     }
}

export default CustomImage;