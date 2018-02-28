import React, { Component } from 'react';
import './App.css';
import Input from './component/input';


class App extends Component {
  render() {
    return (
      <div className="row back">
        <div className="col s12">
          <div className="row">
            <div className="col s12 center-align">
              <h1 className="thin white-text">ttt Intern Test</h1>
              <Input />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
