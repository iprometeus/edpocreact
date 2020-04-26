import React, { Component } from 'react';
import './App.css';
import Data from './api/Data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Data/>
      </div>
    );
  }
}

export default App;
