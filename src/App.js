import React, { Component } from 'react';
import './App.css';
import Sidebar from './layout/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Sidebar />
        </Router>
      </div>
    );
  }
}

export default App;
