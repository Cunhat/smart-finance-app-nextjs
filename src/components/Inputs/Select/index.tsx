import React from 'react';
import { SelectContent, SelectTrigger, SelectItem, SelectItemText, SelectLabel } from './styles';
import * as Select from '@radix-ui/react-select';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SelectInputProps = {
  data: Array<string> | Array<{ label: string; values: Array<string> }>;
  defaultValue: string;
  onValueChange: (e) => void;
};

export function SelectInput(props: SelectInputProps) {
  return (
    <Select.Root defaultValue={props?.defaultValue?.toLocaleLowerCase()} onValueChange={props.onValueChange}>
      <SelectTrigger>
        <Select.Value />
        <Select.Icon>
          <FontAwesomeIcon key={Math.floor(Math.random() * 81000)} style={{ width: '15px', height: '15px' }} icon={faCaretDown} />
        </Select.Icon>
      </SelectTrigger>
      <SelectContent>
        <Select.Viewport>
          <Select.Group>
            {props.data?.map((item, index) => {
              if (typeof item === 'object') {
                return (
                  <>
                    <SelectLabel key={item.label + index}>{item.label}</SelectLabel>
                    {item.values.map((subItem, index) => {
                      return (
                        <SelectItem key={subItem} value={subItem.toLocaleLowerCase()}>
                          <SelectItemText key={subItem + index}>{subItem}</SelectItemText>
                        </SelectItem>
                      );
                    })}
                  </>
                );
              } else {
                return (
                  <SelectItem key={item + index} value={item.toLocaleLowerCase()}>
                    <SelectItemText>{item}</SelectItemText>
                  </SelectItem>
                );
              }
            })}
          </Select.Group>
        </Select.Viewport>
      </SelectContent>
    </Select.Root>
  );
}
