import React from 'react';
import Button from './Button';

const ButtonsGroup = ({ options, clickHandler }) => (
  <div>
    {Object.keys(options).map(name =>
      <Button
        clickHandler={clickHandler}
        name={name}
        checked={options[name]}
        label={name}
        key={name}
      />)
    }
  </div>
);

export default ButtonsGroup;
