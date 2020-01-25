import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
    <div class="Home">
      <div style={{display: 'flex',
        justifyContent: 'center',
      }}>
        <div>
          <h1>FoodCycle</h1>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;