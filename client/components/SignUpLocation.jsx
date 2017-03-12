import React from 'react';
import TextInputField from './TextInputField.jsx';

const SignUpLocation = ({ changeHandler, label, placeholderText, value }) => (
  <TextInputField
    changeHandler={changeHandler}
    label={label}
    placeholderText={placeholderText}
    value={value}
  />
);

export default SignUpLocation;
