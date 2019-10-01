import React from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import Display from './Display' // eslint-disable-line no-unused-vars
import ButtonPanel from './ButtonPanel' // eslint-disable-line no-unused-vars
import calculate from '../logic/calculate' // eslint-disable-line no-unused-vars

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  clickHandler = (button) => {
    this.setState(calculate(this.state, button))
  }
  render() {
    return (
      <div className="App" >
        <Display result={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.clickHandler} operation={this.state.operation === 'null' ? '' : this.state.operation} />
      </div>
    );
  }
}

export default App;
