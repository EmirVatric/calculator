import React from 'react'; // eslint-disable-line no-unused-vars
import './Button.css'

const Button = (props) => {
  return (
    <button className='button'>
      {props.value}
    </button>
  );
}

export default Button;