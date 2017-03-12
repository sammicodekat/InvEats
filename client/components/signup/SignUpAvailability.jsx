import React from 'react';
import Button from '../Button';

const SignUpAvailability = ({ clickHandler, options }) => (
  <table>
    <tbody>
      {Object.keys(options).map(day => (
        <tr key={day}>
          <td>{day}</td>
          {Object.keys(options[day]).map(meal => (
            <td key={`${day} ${meal}`}>
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
    </tbody>
  </table>
);

export default SignUpAvailability;
