import styled from 'styled-components';

type SettingsItemContainerProps = {
  isActive: boolean;
};

export const SettingsItemContainer = styled.div<SettingsItemContainerProps>`
  display: flex;
  gap: 16px;
  padding: 15px 30px;
  border-radius: 10px;
  color: #333;
  align-items: center;
  background-color: ${(props) => (props.isActive ? '#ebeff2' : '')};

  :hover {
    background-color: #ebeff2;
    cursor: pointer;
  }
`;
