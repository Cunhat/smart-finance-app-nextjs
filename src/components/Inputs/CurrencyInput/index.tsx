import React from 'react';
import { InputNumberContainer } from './styles';
import { InputNumberValueChangeParams } from 'primereact/inputnumber';

type BasicTextInputProps = {
  value: number;
  width?: string;
  height?: string;
  onChange: (e: InputNumberValueChangeParams) => void;
  placeholder?: string;
  fontSize?: string;
};

export function CurrencyInput(props: BasicTextInputProps) {
  return (
    <InputNumberContainer
      inputId='currency-germany'
      value={props.value}
      onValueChange={props.onChange}
      mode='currency'
      currency='EUR'
      locale='de-DE'
      height={props.height}
      width={props.width}
      fontSize={props.fontSize}
      placeholder={props.placeholder}
    />
  );
}
