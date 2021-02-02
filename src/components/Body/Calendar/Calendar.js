import React from 'react';

import { Card } from 'antd';
import 'antd/dist/antd.css';
import Calendar from 'react-calendar';
import './Calendar.css';

const calendarCard = () => (
<Card style={{ maxWidth: '100%', borderLeft : "none !important" }} id="block">
    <div className="card-header">Calendar</div>
    <div className="calendartext-center p-3 card-body" style={{alignItems: 'center'}}>
      <Calendar  className="calendar-date"/>
    </div>
  </Card>

);

export default calendarCard;
