import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import { Container } from 'react-bootstrap';
import CustomNavbar from './components/Navbar/Navbar';
import Landing from "./components/layout/Landing";
import Events from "./components/layout/Events";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Search from './components/layout/Search';

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      latLng: '',
    };
  }

  handleSearchParams = (searchParams) => {
    console.log(searchParams);
    this.setState({
      artist: searchParams.artist,
      latLng: searchParams.latLng
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Container fluid className="no-padding">
              <CustomNavbar />
              <Route exact path="/" render={() => <Landing searchParams={(searchParams) => this.handleSearchParams(searchParams)} />} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/search" render={() => <Search searchParams={(searchParams) => this.handleSearchParams(searchParams)} />} />
              <Route exact path="/events" render={() => <Events city={this.state.latLng} artist={this.state.artist} />} />
              {(this.state.artist || this.state.latLng) &&
                <Redirect to="/events" />}
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
