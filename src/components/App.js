import React from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import Display from './Display' // eslint-disable-line no-unused-vars
import ButtonPanel from './ButtonPanel' // eslint-disable-line no-unused-vars

const App = () => {
  const displayValue = () => {
    return 0
  }
  return (
    <div className="App">
      <Display value={displayValue()} />
      <ButtonPanel />
    </div>
  );
}

export default App;
