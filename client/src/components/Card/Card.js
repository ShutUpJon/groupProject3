import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './card.css';

var card1 = require('./card1.jpeg');
var card2 = require('./card2.jpeg');

class CustomCard extends Component {
     render() {
          return (
               <Container fluid className="text-center" id="search">
                    <Row>
                         <Col xs={12} md={6}>
                              <Card>
                                   <Card.Img variant="top" src={card1} />
                                   <Card.Body>
                                        <Card.Title>Search Artists</Card.Title>
                                        <Card.Text>
                                             Some quick example text to build on the card title and make up the bulk of
                                             the card's content.
                                        </Card.Text>
                                        <Button variant="outline-dark" target="_blank" href="/search">Search Artists</Button>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col xs={12} md={6}>
                              <Card>
                                   <Card.Img variant="top" src={card2} />
                                   <Card.Body>
                                        <Card.Title>Search Location</Card.Title>
                                        <Card.Text>
                                             Some quick example text to build on the card title and make up the bulk of
                                             the card's content.
                                        </Card.Text>
                                        <Button variant="outline-dark" target="_blank" href="/search">Search Location</Button>
                                   </Card.Body>
                              </Card>
                         </Col>
                    </Row>
               </Container>
          )
     }
}
export default CustomCard;