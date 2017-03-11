import React from 'react';
import TextInputField from './TextInputField.jsx';


const SignUpLocation = ({ pressKeyHanlder, options }) => (
  <TextInputField pressKeyHanlder={pressKeyHanlder} label={options.label} placeholderText={options.placeholderText} />
);

export default SignUpLocation;
