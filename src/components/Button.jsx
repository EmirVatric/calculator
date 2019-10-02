import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button className={'button'} style={{ backgroundColor: (props.color === 'orange' ? '' : 'lightGray'), width: (props.width === true ? '50%' : '') }}>
      {props.name}
    </button >
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.bool.isRequired,
  color: PropTypes.string
}

export default Button;