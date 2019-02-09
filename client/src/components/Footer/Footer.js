import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './footer.css';

class Footer extends Component {
     render() {
          return (
               <Container fluid className="no-padding">
                    <Jumbotron className="social text-center" id="connect">
                         <h1>Connect With Us</h1>
                         <h3>Keep up to date on what we're working on next</h3>
                         <div class="col-sm-12">
                              <a href="/"><i class="fab fa-facebook"></i></a>
                              <a href="/"><i class="fab fa-instagram"></i></a>
                              <a href="/"><i class="fab fa-twitter-square"></i></a>
                              <a href="/"><i class="fab fa-youtube-square"></i></a>
                              <a href="/"><i class="fab fa-github-square"></i></a>
                         </div>
                         <br />
                         <div>
                              <p><i class="far fa-copyright"></i>Roadie 2019</p>
                         </div>
                    </Jumbotron>
               </Container>
          )
     }
}

export default Footer;