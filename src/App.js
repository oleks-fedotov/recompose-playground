import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './WrappedComponents/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegistrationForm onSubmit={state => console.log(state)} />
      </div>
    );
  }
}

export default App;
