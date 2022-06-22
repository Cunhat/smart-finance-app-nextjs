import React from 'react';
import { TextElement } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TextIconContainer } from './styles';

type TextProps = {
  text: string;
  fontSize?: string;
  bold?: boolean;
  color?: string;
  icon: IconProp;
};

export const TextIcon: React.FC<TextProps> = ({ text, fontSize, bold, color, icon }) => {
  return (
    <TextIconContainer>
      <FontAwesomeIcon style={{ width: '20px', height: '20px' }} icon={icon} />
      <TextElement fontSize={fontSize} bold={bold} color={color}>
        {text}
      </TextElement>
    </TextIconContainer>
  );
};
