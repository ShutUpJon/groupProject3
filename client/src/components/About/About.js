import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './about.css';

class About extends Component {
     render() {
          return (
               <Jumbotron fluid className="about" id="about">
                    <Container>
                         <h1>About This App</h1>
                         <h3>Roadie uses the following technologies:</h3>
                         <h3>React.js | react-bootstrap | mongodb | express</h3>
                         <br />
                         <h3>Collaborators:</h3>
                         <h3>Jon Lawrence & Niko Hofmann</h3>
                    </Container>
               </Jumbotron>
          )
     }
}

export default About;