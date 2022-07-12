import React from 'react';
import { StyledCalendar } from './styles';
import { Calendar } from 'primereact/calendar';
import 'primeicons/primeicons.css';

type CalendarInputProps = {
  dateFormat: string;
  date: Date;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function CalendarInput(props: CalendarInputProps) {
  return (
    <StyledCalendar>
      <Calendar dateFormat={props.dateFormat} value={props.date} onChange={props.onChange} />
    </StyledCalendar>
  );
}
