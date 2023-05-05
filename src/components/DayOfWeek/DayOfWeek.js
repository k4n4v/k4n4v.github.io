import React, { useState, useEffect } from 'react';
import "./DayOfWeek.css";

export default function DayOfWeek() {
  const [day, setDay] = useState('');

  useEffect(() => {
    const getDayOfWeek = () => {
      const currentDate = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setDay(days[currentDate.getDay()]);
    };

    getDayOfWeek();
  }, []);

  return (
    <div className='day-container'>
      <p>Hope you are having an amazing {day}!</p>
    </div>
  );
};
