import React from 'react';

export function ActualDate({ date }) {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let day = days[date.getDay()];

  let hour = date.getUTCHours();

  let time = date.getTime();
  let timeUpdated = new Date(time).toLocaleDateString();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getUTCMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {timeUpdated}{' '}
    </div>
  );
}
