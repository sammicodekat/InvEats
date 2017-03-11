import React from 'react';
import Button from './Button.jsx';

const SignUpAvailability = ({ clickHandler, options }) => (
  <table>
    {options.keys().map(day => (
      <tr>
        <td>{day}</td>
        {day.keys().map(meal => (
          <td>
            <Button
              clickHandler={clickHandler}
              name={`${day} ${meal}`}
              checked={options[day][meal]}
              label={meal}
            />
          </td>
        ))}
      </tr>
    ))}
  </table>
);

export default SignUpAvailability;
