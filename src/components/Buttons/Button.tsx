import React from 'react';
import { ButtonContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

type ButtonProps = {
  title: string;
  onClick: () => void;
  color?: string;
  textColor?: string;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  disabled?: boolean;
  primaryAction?: boolean;
  secondaryAction?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonContainer
      primaryAction={props.primaryAction}
      secondaryAction={props.secondaryAction}
      disabled={props.disabled}
      color={props.color}
      textColor={props.textColor}
      onClick={props.onClick}
    >
      {props.leftIcon && <FontAwesomeIcon icon={props.leftIcon} />}
      {props.title}
      {props.rightIcon && <FontAwesomeIcon icon={props.rightIcon} />}
    </ButtonContainer>
  );
};
