import React from 'react';
import { IconContainer } from './styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconProps = {
  icon: IconProp;
  onClick?: () => void;
  color?: string;
  iconSize: string;
};

export const Icon: React.FC<IconProps> = (props) => {
  return <IconContainer icon={props.icon} onClick={props.onClick} color={props.color} iconSize={props.iconSize}/>;
};
