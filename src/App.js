import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DeviceManager from './components/DeviceManager.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DeviceManager />
      </div>
    );
  }
}

export default App;
