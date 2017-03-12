import React from 'react';
import TextInputField from './TextInputField.jsx';
import TextAreaField from './TextAreaField.jsx';

const SignUpProduct = ({ changeTitleHandler, changeDescriptionHandler, titlePlaceholderText, descriptionPlaceholderText, options, descriptionValue, titleValue }) => (
  <div>
    <TextInputField
      changeHandler={changeTitleHandler}
      placeholderText={titlePlaceholderText}
      value={titleValue}
    />
    <TextAreaField
      changeHandler={changeDescriptionHandler}
      placeholderText={descriptionPlaceholderText}
      value={descriptionValue}
    />
  </div>
);

export default SignUpProduct;
