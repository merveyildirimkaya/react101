import "./clock1.css";
import moment, { relativeTimeRounding } from "moment";
import React,{useState, useEffect} from "react";
const Clock1 = (props) => {

  const [dateTime, setDateTime]=useState(moment());


  const timeStr = dateTime.format("HH:mm");
  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  const minute= dateTime.format("mm");
  const second= dateTime.format("ss");
  let doubledot= second %2==0 ? ":" : " ";
  let message = "";
  if (hour >= 6 && hour < 11) message = "Morning";
  else if (hour >= 11 && hour < 17) message = "Afternoon";
  else if (hour >= 17 && hour < 21) message = "Evening";
  else message = "Night";

  useEffect(()=>{const sayac= setInterval(()=>{
    setDateTime(moment());
    console.log("deneme");
  },1000);

  return ()=>{
    clearInterval(sayac);
  }
  },[]);

  return (
    <div className="clock-container">
      <div className="clock">{hour}
      {doubledot}
      {minute}</div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};
export default Clock1;