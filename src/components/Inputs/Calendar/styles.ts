import { Calendar } from 'primereact/calendar';
import styled from 'styled-components';

export const StyledCalendar = styled.div`
  .p-calendar {
    height: 25px;
    :hover {
      cursor: pointer;
    }
  }

  .p-inputtext {
    border: 1px solid #000;
    color: #000;
    font-size: 14px;
    font-family: "Smart Finance Regular";

    :hover {
      border: 1px solid ${props => props.theme.colors.primary[500]};
    }

    :focus {
      outline: none;
      border: 2px solid ${props => props.theme.colors.primary[500]};
      box-shadow: 0 0 10px ${props => props.theme.colors.primary[300]};
    }
  }
`;
