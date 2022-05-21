import React from 'react';
import {StyledCalendar} from './styles';
import { Calendar } from 'primereact/calendar';

type CalendarInputProps = {
  dateFormat: string;
  date: Date;
}

export function CalendarInput(props: CalendarInputProps) {
  return (
    <StyledCalendar>
      <Calendar dateFormat={props.dateFormat} value={props.date} onChange={() =>{}} />
    </StyledCalendar>
  );
}
