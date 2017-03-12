import React from 'react';

const TextInputField = ({ label, placeholderText, changeHandler, value }) => (
  <div>
    <div>
      <input
        onChange={changeHandler}
        placeholder={placeholderText}
        type="text"
        name={label}
        value={value}
      />
    </div>
  </div>
);

export default TextInputField;
