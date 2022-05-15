import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';

export const SelectContent = styled(Select.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)';
  padding: 5px;

  :hover {
    cursor: pointer;
  }
`;

export const SelectTrigger = styled(Select.SelectTrigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  font-family: 'Smart Finance Regular';
  line-height: 1px;
  height: 25px;
  gap: 5px;
  background-color: white;
  color: #000;
  border: 1px solid #000;

  :hover {
    border: 1px solid ${props => props.theme.colors.primary[500]};
  }

  :focus {
    border: 1px solid ${props => props.theme.colors.primary[500]};
  }
`;

export const SelectItem = styled(Select.Item)`
  padding: 5px;
  :hover {
    color: ${props => props.theme.colors.primary[500]};
  }
`;

export const SelectItemText = styled(Select.ItemText)`
  font-family: 'Smart Finance Regular';
  font-size: '14px';
`;
