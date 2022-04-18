import styled from "styled-components";

export const PageLayoutContainer = styled.div`
  display: flex;
  background-color: #fff;
  height: 100vh;
`;

export const PageMainContainer = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.page};
  padding: 20px;
`;
