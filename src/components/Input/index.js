import React from 'react';
import PropTypes from 'prop-types';

const getNewTextValueFromEvent = callback => event =>
  callback(event.target.value);

const Input = ({
  inputName,
  textValue,
  updateText,
  propagateUpdate,
  placeholder
}) => (
  <input
    type="text"
    name={inputName}
    placeholder={placeholder}
    value={textValue}
    onBlur={() => propagateUpdate(inputName, textValue)}
    onChange={getNewTextValueFromEvent(updateText)}
  />
);

Input.defaultProps = {
  textValue: '',
  inputName: '',
  placeholder: ''
};

Input.propTypes = {
  textValue: PropTypes.string,
  inputName: PropTypes.string,
  placeholder: PropTypes.string,
  updateText: PropTypes.func.isRequired,
  propagateUpdate: PropTypes.func.isRequired
};

export default Input;
