import React from 'react';
import TextInputField from '../textarea/TextInputField';

const SignUpLocation = ({ changeHandler, label, placeholderText, value }) => (
  <div>
    <h1>Select your Location</h1>
    <TextInputField
    classN="fluid ui input"
    changeHandler={changeHandler}
    label={label}
    placeholderText={placeholderText}
    value={value}
    />
  </div>
);

export default SignUpLocation;
