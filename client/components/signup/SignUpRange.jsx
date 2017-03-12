import React from 'react';
import ButtonsGroup from '../button/Buttonsgroup';


const SignUpRange = ({ clickHandler, options }) => (
  <div>
    <h1>Select Your Funding Range</h1>
    <ButtonsGroup classN="fluid ui button massive" clickHandler={clickHandler} options={options} />
  </div>
);

export default SignUpRange;
