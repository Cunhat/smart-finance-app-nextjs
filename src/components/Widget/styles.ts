import styled from "styled-components";

export const WidgetContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background.primary};
  border-radius: 20px;
  height: 100%;
  box-shadow: ${(props) => props.theme.shadows.general};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    box-shadow: ${(props) => props.theme.shadows.hover};
    transform: translate(0px, -1px);
    cursor: pointer;
  }
`;
