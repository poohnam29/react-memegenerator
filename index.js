import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Meme from './Meme';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        
        <Header name="Meme Generator"/>
       
        <Meme/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
