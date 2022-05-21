import React from 'react';
import { InputText } from './styles';

type BasicTextInputProps = {
  value: string;
}

export function BasicTextInput(props: BasicTextInputProps) {
  return <InputText value={props.value}/>;
}
