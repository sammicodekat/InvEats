import React from 'react';
import Button from './Button.jsx';


const ButtonsGroup = ({ options, clickHandler }) => (
  <div>
    {options.map(option =>
      <Button
        clickHandler={clickHandler}
        name={option.name}
        checked={options[option.name]}
        label={option.name}
      />)
    }
  </div>
);

export default ButtonsGroup;
