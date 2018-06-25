import React, { Component } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>React Grid System</h1>
        </header>
        <MainComponent></MainComponent>
        <footer>
          <p>Footer content goes here!!</p>
        </footer>
      </div>
    );
  }
}

export default App;
