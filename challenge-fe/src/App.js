import React, { Component } from 'react';
import './App.css';
import { Roster } from './roster/Roster';
import { Contact } from './contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Better Lesson</h2>
        </div>
        <div className="App-contents">
          <div className="App-content-row">
            <Roster />
          </div>
          <div className="App-content-row">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
