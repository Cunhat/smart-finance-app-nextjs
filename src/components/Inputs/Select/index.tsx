import React from 'react';
import { SelectContent, SelectTrigger, SelectItem, SelectItemText } from './styles';
import * as Select from '@radix-ui/react-select';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SelectInputProps = {
  data: Array<string>;
  defaultValue: string;
};

export function SelectInput(props: SelectInputProps) {
  return (
    <>
      <Select.Root defaultValue={props.defaultValue.toLocaleLowerCase()}>
        <SelectTrigger>
          <Select.Value />
          <Select.Icon>
            <FontAwesomeIcon style={{ width: '15px', height: '15px' }} icon={faCaretDown} />
          </Select.Icon>
        </SelectTrigger>
        <SelectContent>
          <Select.Viewport>
            <Select.Group>
              {props.data?.map((item, index) => {
                return (
                  <SelectItem key={item+index} value={item.toLocaleLowerCase()}>
                    <SelectItemText>{item}</SelectItemText>
                  </SelectItem>
                );
              })}
            </Select.Group>
          </Select.Viewport>
        </SelectContent>
      </Select.Root>
    </>
  );
}
