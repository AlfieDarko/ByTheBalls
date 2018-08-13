import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

class App extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

ReactDOM.render(
  <div>
    <Header />
    <App />
  </div>,
  document.getElementById('app'),
);
module.hot.accept();
