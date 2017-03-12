import React from 'react';
import TextInputField from '../textarea/TextInputField';
import TextAreaField from '../textarea/TextAreaField';

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
