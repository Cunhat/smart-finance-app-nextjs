import styled from 'styled-components';

export const MainItemContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    background-color: #ebeff2;
  }
`;

export const SecondaryItemContainer = styled.div`
  padding: 20px 20px 20px 42px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    background-color: #ebeff2;
  }
`;

export const EditActionsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;
