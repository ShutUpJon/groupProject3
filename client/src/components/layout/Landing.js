import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 align-center">
            <div className="form-group">
              <label for="artistSearch">Artist</label>
              <input type="text" className="form-control" id="artistSearch" placeholder="Enter artist"></input>
            </div>
            <div className="form-group">
              <label for="citySearch">City</label>
              <input type="text" className="form-control" id="citySearch" placeholder="Enter City"></input>
            </div>
            <button type="submit" className="btn btn-primary waves-effect waves-light hoverable">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
