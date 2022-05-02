import styled from "styled-components";

type EditableProps = {
  editable: boolean;
};

export const InputContainer = styled.div`
  padding: 4px;
  margin: 0;
  border-radius: 5px;
  min-width: 200px;

  :hover {
    background-color: pink;
  }
`;

export const InputText = styled.input<EditableProps>`
  margin: 0;
  max-width: 200px;
  display: ${(props) => (props.editable ? "block" : "none")};
`;

export const InfoText = styled.p<EditableProps>`
  margin: 0;
  display: ${(props) => (props.editable ? "none" : "block")};
`;
