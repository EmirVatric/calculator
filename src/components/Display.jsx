import React from 'react'; // eslint-disable-line no-unused-vars
import './Display.css'

const Display = (props) => {
  return (
    <div className='display'>
      {props.value}
    </div>
  );
}

export default Display;