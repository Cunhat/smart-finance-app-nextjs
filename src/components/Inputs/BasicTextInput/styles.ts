import styled from 'styled-components';

type InputTextProps = {
  width?: string;
  height?: string;
  fontSize?: string;
};

export const InputText = styled.input<InputTextProps>`
  border-radius: 5px;
  height: ${(props) => (props.height ? props.height : '25px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  font-family: 'Smart Finance Regular';
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  border-width: 1px;
  padding-left: 10px;
  outline: none !important;
  border: 1px solid ${(props) => props.theme.colors.secondary[500]};

  :focus {
    outline: none !important;
    border: 2px solid ${(props) => props.theme.colors.primary[500]};
    box-shadow: 0 0 10px #719ece;
    //border-color: ${(props) => props.theme.colors.primary[500]};
  }
`;
