import styled from 'styled-components';

export const TagContainer = styled.div`
  padding: 10px 15px;
  background-color: #ebeff2;
  border-radius: 20px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

export const DeleteIconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: #ebeff2;

`;