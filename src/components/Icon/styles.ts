import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconProps = {
  color?: string;
  iconSize?: string;
};

export const IconContainer = styled(FontAwesomeIcon)<IconProps>`
  color: ${(props) => props.color ? props.color : "#000"};
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};
  padding: 5px;

  :hover {
    background-color: #dbeff2;
    border-radius: 20px;
    cursor: pointer;
  }
`;
