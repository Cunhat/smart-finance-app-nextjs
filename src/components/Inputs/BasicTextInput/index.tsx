import React from 'react';
import { InputTextContainer } from './styles';

 

type BasicTextInputProps = {
  value: string;
  width?: string;
  height?: string;
  onChange: () => void;
  placeholder?: string;
  fontSize?: string;
  isInvalid?: boolean;
};

export function BasicTextInput(props: BasicTextInputProps) {
  return (
    <InputTextContainer
      value={props.value}
      height={props.height}
      width={props.width}
      fontSize={props.fontSize}
      placeholder={props.placeholder}
      onChange={props.onChange}
      isInvalid={props.isInvalid || false}
    />
  );
}
