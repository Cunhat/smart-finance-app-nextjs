import React from 'react';
import { TextElement } from './styles';

type TextProps = {
  text: string;
  fontSize?: string;
  bold?: boolean;
  color?: string;
};

export function Text({ text, fontSize, bold, color }: TextProps): JSX.Element {
  return (
    <TextElement fontSize={fontSize} bold={bold} color={color}>
      {text}
    </TextElement>
  );
}
