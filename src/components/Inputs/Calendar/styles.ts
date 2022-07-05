
import styled from 'styled-components';

type CalendarProps = {
  fontSize?: string;
};


export const StyledCalendar = styled.div<CalendarProps>`
  width: 100%;
  height: 40px;

  .p-calendar {
    width: 100%;
    height: 40px;

   
  }

  .p-inputtext {
    border-radius: 5px;
    font-family: 'Smart Finance Regular';
    font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
    border-width: 1px;
    padding-left: 10px;
    outline: none !important;
    border: 1px solid ${(props) => (props.theme.colors.secondary[500])};

    :focus {
      outline: none !important;
      border: 1px solid ${(props) =>  (props.theme.colors.primary[500])} !important;
      border-color: ${(props) => (props.theme.colors.primary[500])} !important;
      box-shadow: none !important;
    }

    :hover {
      border: 1px solid;
      border-color: ${(props) => (props.theme.colors.primary[500]) } !important;
    }
  }
  .p-datepicker-prev
  .p-datepicker-next {
    color: #999;
  }
`;
