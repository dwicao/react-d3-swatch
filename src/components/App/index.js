import React, { Component } from 'react';
import Colors from '../Colors';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <svg width="500" height="40">
          <Colors width="500" />
        </svg>
      </div>
    );
  }
}

export default App;
