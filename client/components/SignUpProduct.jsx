import React from 'react';
import TextInputField from './TextInputField.jsx';
import TextAreaField from './TextAreaField.jsx';

const SignUpProduct = ({ changeHandler, options }) => (
  <div>
    <TextInputField
      changeHandler={changeHandler}
      label={options.label}
      placeholderText={options.placeholderText}
    />
    <TextAreaField
      changeHandler={changeHandler}
      label={options.label}
      placeholderText={options.placeholderText}
    />
  </div>
);

export default SignUpProduct;
