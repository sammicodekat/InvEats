import React from 'react';
import Button from '../button/Button';

const SignUpAvailability = (props) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const times = [
    // { '12Hour': '12PM', '24Hour': 12 },
    { '12Hour': '1PM', '24Hour': 13 },
    { '12Hour': '2PM', '24Hour': 14 },
    { '12Hour': '6PM', '24Hour': 18 },
    { '12Hour': '7PM', '24Hour': 19 },
    { '12Hour': '8PM', '24Hour': 20 },
  ];

  const handleClick = (e) => {
    const longDate = getISODateNextWeek(e);
    // send it to openTable
    props.handleClick(longDate);
  };

  const getISODateNextWeek = (e) => {
    const shortDate = e.target.name.split(' ');
    const numDayOfWeek = days.indexOf(shortDate[0]);
    const dateNextWeek = new Date();
    let hour = times.find(item => item['12Hour'] === shortDate[1])['24Hour'] + 8;
    hour = (hour > 24 ? hour - 24 : hour);
    dateNextWeek.setDate(dateNextWeek.getDate() + ((((7 + numDayOfWeek) - dateNextWeek.getDay()) % 7) + 1));
    dateNextWeek.setHours(hour);
    return dateNextWeek.toISOString();
  };

  return (
    <div className="availability-matrix">
      <table>
        <tbody>
          <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
            {days.map(day => (
              <th style={{ fontSize: '20px' }}><strong>{day}</strong></th>
            ))}
          </tr>
          {times.map(time => (
            <tr style={{ display: 'flex', justifyContent: 'space-between' }}>
              {[0, 1, 2, 3, 4].map(num => (
                <td key={`${num} ${time['12Hour']}`}>
                  <Button
                    clickHandler={handleClick}
                    name={`${days[num]} ${time['12Hour']}`}
                    checked={false}
                    label={time['12Hour']}
                    classN="availability-button"
                  />
                </td>
              ))}
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SignUpAvailability;
