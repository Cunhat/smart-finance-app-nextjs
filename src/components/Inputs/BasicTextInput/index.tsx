import React from 'react';
import { InputText } from './styles';

type BasicTextInputProps = {
  value: string;
  width?: string;
  height?: string;
  onChange: () => void;
  placeholder?: string;
  fontSize?: string;
};

export function BasicTextInput(props: BasicTextInputProps) {
  return (
    <InputText
      value={props.value}
      height={props.height}
      width={props.width}
      fontSize={props.fontSize}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
