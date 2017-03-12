import React from 'react';
import ButtonsGroup from '../button/Buttonsgroup';


const SignUpRole = ({ clickHandler, options }) => (
  <div>
    <h1>Select Your Role</h1>
    <ButtonsGroup classN="fluid ui button massive" clickHandler={clickHandler} options={options} />
  </div>
);

export default SignUpRole;
