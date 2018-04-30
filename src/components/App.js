import React, { Component } from 'react';
import '../styles/App.css';
import Tickets from "./ticket/tickets.component";

class App extends Component {
  render() {
    return (
      <div className="grey lighten-3">
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
