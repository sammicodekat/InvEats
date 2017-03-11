import React from 'react';


const TextInputField = ({ label, placeholderText, changeHandler }) => (
  <div>
    {label}
    <div>
      <input
        onChange={changeHandler}
        placeholder={placeholderText}
        type="text"
      />
    </div>
  </div>
);

export default TextInputField;
