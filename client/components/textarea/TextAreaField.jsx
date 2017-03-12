import React from 'react';


const TextAreaField = ({ label, placeholderText, changeHandler }) => (
  <div>
    {label}
    <div>
      <textarea
        onChange={changeHandler}
        placeholder={placeholderText}
        type="text"
        name={label}
      />
    </div>
  </div>
);

export default TextAreaField;
