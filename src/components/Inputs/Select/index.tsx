import React from 'react';
import { SelectContent, SelectTrigger, SelectItem, SelectItemText } from './styles';
import * as Select from '@radix-ui/react-select';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SelectInput() {
  return (
    <>
      <Select.Root defaultValue='blueberry'>
        <SelectTrigger>
          <Select.Value />
          <Select.Icon>
            <FontAwesomeIcon style={{ width: '15px', height: '15px' }} icon={faCaretDown} />
          </Select.Icon>
        </SelectTrigger>
        <SelectContent>
          <Select.Viewport>
            <Select.Group>
              <SelectItem value='blueberry'>
                <SelectItemText>Blueberry</SelectItemText>
              </SelectItem>
              <SelectItem value='apple'>
                <SelectItemText>Apple</SelectItemText>
              </SelectItem>
              <SelectItem value='orange'>
                <SelectItemText>Orange</SelectItemText>
              </SelectItem>
            </Select.Group>
          </Select.Viewport>
        </SelectContent>
      </Select.Root>
    </>
  );
}
