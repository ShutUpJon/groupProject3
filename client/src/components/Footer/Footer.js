import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './footer.css';

class Footer extends Component {
     render() {
          return (
               <Container fluid className="no-padding">
                    <Jumbotron fluid className="social text-center" id="connect">
                         <h1>Connect With Us</h1>
                         <h3>Keep up to date on what we're working on next</h3>
                         <div className="col-sm-12">
                              <a href="/"><i className="fab fa-facebook"></i></a>
                              <a href="/"><i className="fab fa-instagram"></i></a>
                              <a href="/"><i className="fab fa-twitter-square"></i></a>
                              <a href="/"><i className="fab fa-youtube-square"></i></a>
                              <a href="/"><i className="fab fa-github-square"></i></a>
                         </div>
                         <br />
                         <div>
                              <p><i className="far fa-copyright"></i>Roadie 2019</p>
                         </div>
                    </Jumbotron>
               </Container>
          )
     }
}

export default Footer;