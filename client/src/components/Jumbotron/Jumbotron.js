import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './jumbotron.css';

class CustomJumbotron extends Component {
     render() {
          return (
               <Jumbotron fluid>
                    <Container>
                         <h1>Destination. Music.</h1>
                         <h3>Finding Concert Tickets, Flights, Hotels has never been easier.</h3>
                         <h3>With Roadie we take the guesswork out of destination concerts.</h3>
                    </Container>
               </Jumbotron>
          )
     }
}

export default CustomJumbotron;