import styled from "styled-components";

export const PageLayoutContainer = styled.div`
  display: flex;
  background-color: #fff;
  height: 100vh;
`;
export const PageLayoutSideBarContainer = styled.div`
  width: 60px;
`;

export const PageMainContainer = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.page};
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px
`;
