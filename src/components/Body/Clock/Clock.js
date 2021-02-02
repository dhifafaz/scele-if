import React,{ useState, useEffect } from 'react';

import { Card } from 'antd';
import 'antd/dist/antd.css';
import './Clock.css';

function Clock(props) {
  const [date, setDate] = useState(new Date());

 //im just realize it replace componentDidMount and componentWillUnmount
 useEffect(() => {
  var timerID = setInterval( () => tickTock(), 1000 );

    return function clean() {
      clearInterval(timerID);
    };
 });

   function tickTock() {
    setDate(new Date());
   }

   return (
    <Card id="block" style={{ maxWidth: '100%', borderLeft : "none !important" }} >
    <div className="card-header" >Clock</div>
    <div  style={{alignItems: 'center'}} className="card-body">
        {date.toLocaleTimeString()}
    </div>
  </Card>
    );
}

export default Clock;