import React from 'react';
import { SelectContainer } from './styles';
import { DropdownChangeParams } from 'primereact/dropdown';

type SelectInputProps = {
  data: Array<{ label: string; values: Array<string> }>;
  defaultValue: {} | null;
  onValueChange: (e: DropdownChangeParams) => void;
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
