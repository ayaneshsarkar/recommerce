import React from 'react';
import {CalendarContainer} from 'react-datepicker';
import '../../index.scss';

const DateWrapper = ({className, children}) => {
  return (
    <div>
      <div style={{ width: '100%', padding: "1rem", background: "#fff", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    </div>
  )
}


export default DateWrapper;