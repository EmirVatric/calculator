import React from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import Display from './Display' // eslint-disable-line no-unused-vars
import ButtonPanel from './ButtonPanel' // eslint-disable-line no-unused-vars

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App" >
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
