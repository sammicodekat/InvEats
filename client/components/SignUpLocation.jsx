import React from 'react';
import TextInputField from './TextInputField.jsx';

const SignUpLocation = ({ changeHandler, options }) => (
  <TextInputField
    changeHandler={changeHandler}
    label={options.label}
    placeholderText={options.placeholderText}
  />
);

export default SignUpLocation;
