import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import Home from "./components/Home.js"
import MapPage from "./components/MapPage.js"
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
      <MapPage/>
      // <StoreSetInfo />
    );
  }
}

export default App;
