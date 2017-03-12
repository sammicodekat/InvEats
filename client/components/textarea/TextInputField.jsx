import React from 'react';
import { Input } from 'semantic-ui-react';

const TextInputField = ({ label, placeholderText, changeHandler, value, classN }) => (
  <div>
    <Input
        className={classN}
        onChange={changeHandler}
        placeholder={placeholderText}
        type="text"
        name={label}
        value={value}
    />
  </div>
);

export default TextInputField;
