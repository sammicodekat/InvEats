import React from 'react';
import TextInputField from '../textarea/TextInputField';

const SignUpLocation = ({ changeHandler, label, placeholderText, value }) => (
  <TextInputField
    changeHandler={changeHandler}
    label={label}
    placeholderText={placeholderText}
    value={value}
  />
);

export default SignUpLocation;
