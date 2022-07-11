import styled from 'styled-components';
import { Dropdown } from 'primereact/dropdown';

type InputTextProps = {
  width?: string;
  height?: string;
  fontSize?: string;
};

export const SelectContainer = styled(Dropdown)<InputTextProps>`
  border-radius: 5px;
  height: ${(props) => (props.height ? props.height : '25px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  outline: none !important;
  border: 1px solid ${(props) => props.theme.colors.secondary[500]};
  align-items: center;

  .p-dropdown-label {
    font-family: 'Smart Finance Regular';
    font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  }

  .p-dropdown-open {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.colors.primary[500]} !important;
    border-color: ${(props) => props.theme.colors.primary[500]} !important;
    box-shadow: none !important;
  }

  :not(.p-disabled).p-focus {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.colors.primary[500]} !important;
    border-color: ${(props) => props.theme.colors.primary[500]} !important;
    box-shadow: none !important;
  }

  .p-dropdown-items {
    font-family: 'Smart Finance Regular' !important;
    font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')} !important;
  }

  :hover {
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.primary[500]} !important;
  }
`;
