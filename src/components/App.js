import React, { Component } from 'react';
import '../styles/App.css';
import Tickets from "./tickets.component";

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="header">
          </div>
          <Tickets/>
          <div className="footer">
          </div>
      </div>
    );
  }
}

export default App;
