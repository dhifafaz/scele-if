import React from 'react';


import Calendar from 'react-calendar';
import './Calendar.css';

const calendarCard = () => (
<Card style={{ maxWidth: '100%', borderLeft : "none !important" }} className="calendar">
    <div >Calendar</div>
    <div className="calendartext-center p-3" style={{alignItems: 'center'}}>
      <Calendar style={{ Width: '100%', padding: "0 0 0 0 !important"}} className="calendar-date"/>
    </div>
  </Card>

);

export default calendarCard;
