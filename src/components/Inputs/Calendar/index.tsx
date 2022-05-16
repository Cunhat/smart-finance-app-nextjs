import React from 'react';
import {StyledCalendar} from './styles';
import { Calendar } from 'primereact/calendar';

export function CalendarInput() {
  return (
    <StyledCalendar>
      <Calendar dateFormat='dd/mm/yy' value={new Date()} onChange={() =>{}}></Calendar>
    </StyledCalendar>
  );
}
