import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Wrapper from './components/wrapper';
import Form from './components/input-form'



class App extends Component {
  render() {
    return (
      <Wrapper>
      <Header />
      <Form />
      </Wrapper>
    );
  }
}

export default App;
