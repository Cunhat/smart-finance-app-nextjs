import styled from 'styled-components';

export const TableExpandableItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: #f9f9f9;
  padding: 16px;
  font-family: 'Smart Finance Bold';
  font-size: 16px;

  :hover {
    background-color: ${props => props.theme.colors.primary[200]};
    cursor: pointer;
  }
`;

export const EditActions = styled.div`
  display: flex;
  gap: 10px;
`;
