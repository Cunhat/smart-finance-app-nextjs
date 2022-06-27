import styled from 'styled-components';

type ButtonProps = {
  color?: string;
  textColor?: string;
};

export const ButtonContainer = styled.button<ButtonProps>`
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => (props.textColor ? props.textColor : 'white')};
  background-color: ${(props) => (props.color ? props.color : '#3653d5')};
  border-radius: 20px;
  border: none;
  padding: 5px 20px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  width: fit-content;
  min-width: 100px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  :hover:not([disabled]) {
    cursor: pointer;
    box-shadow: inset 0 2px 8px 0 rgba(0, 0, 0, 0.3);
  }

  :disabled,
  [disabled] {
    background-color: #cccccc;
    color: #fff;
  }
`;
