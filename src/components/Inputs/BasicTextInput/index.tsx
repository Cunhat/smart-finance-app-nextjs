import React from 'react';
import { InputTextContainer } from './styles';
import { InputText } from 'primereact/inputtext';

type BasicTextInputProps = {
  value?: string;
  width?: string;
  height?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  fontSize?: string;
  error?: boolean;
  defaultValue?: string;
};

export const BasicTextInput = React.forwardRef<React.Ref<InputText>, BasicTextInputProps>((props, ref) => {
  return (
    <InputTextContainer
      value={props.value}
      height={props.height}
      width={props.width}
      fontSize={props.fontSize}
      placeholder={props.placeholder}
      onChange={props.onChange}
      error={props.error || false}
      ref={ref}
      defaultValue={props.defaultValue}
    />
  );
});
