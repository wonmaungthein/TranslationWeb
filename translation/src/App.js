import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const footerstyles = {
  background: 'lightblue',
  paddingTop: 80,
  paddingBottom: 80
}

const sectionstyles = {
  background: 'orange',
  paddingTop: 80,
  paddingBottom: 80
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Translation Web Site</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <section style={sectionstyles}>
          This part will be a section part.
          </section>
        <footer style={footerstyles} >This part will be a footer part.
            </footer>
      </div>
    );
  }
}

export default App;
