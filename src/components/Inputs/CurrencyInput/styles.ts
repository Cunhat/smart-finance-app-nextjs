import styled from 'styled-components';
import { InputNumber } from 'primereact/inputnumber';

type InputTextProps = {
  width?: string;
  height?: string;
  fontSize?: string;
  error?: boolean;
};

export const InputNumberContainer = styled(InputNumber)<InputTextProps>`
  .p-inputnumber-input {
    border-radius: 5px;
    height: ${(props) => (props.height ? props.height : '25px')};
    width: ${(props) => (props.width ? props.width : '100%')};
    font-family: 'Smart Finance Regular';
    font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
    border-width: 1px;
    padding-left: 10px;
    outline: none !important;
    border: 1px solid ${(props) => (props.error ? 'red' : props.theme.colors.secondary[500])};
    :focus {
      outline: none !important;
      border: 1px solid ${(props) => (props.error ? 'red' : props.theme.colors.secondary[500])} !important;
      /* border-color: ${(props) => props.theme.colors.primary[500]} !important; */
      box-shadow: none !important;
    }

    :hover {
      border: 1px solid;
      border-color: ${(props) => (props.error ? 'red' : props.theme.colors.secondary[500])} !important;
    }
  }
`;
