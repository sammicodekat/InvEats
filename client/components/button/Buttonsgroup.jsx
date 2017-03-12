import React from 'react';
import Button from './Button';


const ButtonsGroup = ({ options, clickHandler, classN }) => (
  <div>
    {Object.keys(options).map(name => (
      <Button
        classN={classN}
        clickHandler={clickHandler}
        name={name}
        checked={options[name]}
        label={name}
        key={name}
      />
    ))}
  </div>
);

export default ButtonsGroup;
