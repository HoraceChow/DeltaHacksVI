import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import Home from "./components/Home.js"
import StoreSetInfo from "./components/StoreSetInfo"

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
      // Open home screen
      <StoreSetInfo />
    );
  }
}

export default App;
