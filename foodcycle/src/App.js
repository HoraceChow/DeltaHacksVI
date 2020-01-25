import React, { Component } from 'react';
import './styles/App.css';
import Home from './components/Home'
import MapPage from "./components/MapPage"
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
      <div>
        <StoreSetInfo />
      </div>
    );
  }
}

export default App;
