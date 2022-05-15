import styled from 'styled-components';

export const InputText = styled.input`
  border-radius: 5px;
  height: 25px;
  font-family: 'Smart Finance Regular';
  font-size: 14px;
  border-width: 1px;
  padding-left: 10px;
  outline: none !important;
  border: 1px solid ${props => props.theme.colors.secondary[500]};

  :focus {
    outline: none !important;
    border: 2px solid ${props => props.theme.colors.primary[500]};
    box-shadow: 0 0 10px #719ece;
    //border-color: ${props => props.theme.colors.primary[500]};
  }
`;
