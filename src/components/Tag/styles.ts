import styled from 'styled-components';

type TagsProps = {
  confirmDelete: boolean;
};

export const TagContainer = styled.div<TagsProps>`
  padding: 10px 15px;
  background-color: ${(props) => (props.confirmDelete ? 'red' : '#ebeff2')};
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

export const DeleteIconContainer = styled.div<TagsProps>`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: ${(props) => (props.confirmDelete ? 'red' : '#ebeff2')};
`;
