import styled from "styled-components";

export const PageLyoutContainer = styled.div`
  display: flex;
  background-color: #fff;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 100px;
  background-color: pink;

  :hover {
    width: 300px;
  }
`;

export const PageMainContainer = styled.div`
  flex: 1;
  background-color: cyan;
  padding: 20px;
`;
