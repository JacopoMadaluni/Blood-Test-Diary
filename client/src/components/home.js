import React, { Component } from 'react';
import Header from './header.js';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <h1>Hello</h1>
      </div>

    );
  }
}

export default Home;
