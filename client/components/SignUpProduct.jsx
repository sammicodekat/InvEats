import React from 'react';
import TextInputField from './TextInputField.jsx';


const SignUpProduct = ({ changeHandler, options }) => (
  <TextInputField
    changeHandler={changeHandler}
    label={options.label}
    placeholderText={options.placeholderText}
  />

);

export default SignUpProduct;
