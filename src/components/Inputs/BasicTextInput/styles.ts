import styled from 'styled-components';
import { InputText } from 'primereact/inputtext';

type InputTextProps = {
  width?: string;
  height?: string;
  fontSize?: string;
  isInvalid: boolean;
};

export const InputTextContainer = styled(InputText)<InputTextProps>`
  border-radius: 5px;
  height: ${(props) => (props.height ? props.height : '25px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  font-family: 'Smart Finance Regular';
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  border-width: 1px;
  padding-left: 10px;
  outline: none !important;
  border: 1px solid ${(props) => (props.isInvalid ? 'red' : props.theme.colors.secondary[500])};

  :focus {
    outline: none !important;
    border: 1px solid ${(props) => (props.isInvalid ? 'red' : props.theme.colors.primary[500])} !important;
    border-color: ${(props) => (props.isInvalid ? 'red' : props.theme.colors.primary[500])} !important;
    box-shadow: none !important;
    //box-shadow: 0 0 10px #719ece;
    //border-color: ${(props) => props.theme.colors.primary[500]};
  }

  :hover {
    border: 1px solid;
    border-color: ${(props) => (props.isInvalid ? 'red !important' : props.theme.colors.primary[500])+ "!important"};
  }

  ::placeholder {
    color: ${(props) => (props.isInvalid ? 'red' : '')};
  }
`;
