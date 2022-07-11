import React from 'react';
import { SelectContainer } from './styles';

type SelectInputProps = {
  data: Array<string> | Array<{ label: string; values: Array<string> }>;
  defaultValue: string;
  onValueChange: (e) => void;
  placeholder: string;
  width?: string;
  height?: string;
  fontSize?: string;
  optionLabel?: string;
  optionGroupLabel?: string;
  optionGroupChildren?: string;
};

export function SelectInput(props: SelectInputProps) {
  return (
    <SelectContainer
      value={props.defaultValue}
      options={props.data}
      onChange={props.onValueChange}
      placeholder={props.placeholder}
      height={props.height}
      width={props.width}
      fontSize={props.fontSize}
      optionLabel={props.optionLabel}
      optionGroupLabel={props.optionGroupLabel}
      optionGroupChildren={props.optionGroupChildren}
    />
  );
}
