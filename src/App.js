import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './components/Navigation';
import StepFlow from './components/StepFlow';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <Navigation/>
        <StepFlow/>
        </div>
  </MuiThemeProvider>
    );
  }
}

export default App;
