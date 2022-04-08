import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 100px;
  background-color: ${(props) => props.theme.colors.white};
  padding-top: 20px;

  p {
    display: none;
  }

  :hover {
    width: 300px;

    li {
      justify-content: start;
      align-items: center;
      display: flex;
      gap: 20px;
      padding-left: 50px;

      p {
        display: block;
      }
    }
  }
`;

type SidebarItemProps = {
  selected?: boolean;
};

export const SidebarItemContainer = styled.li<SidebarItemProps>`
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary[100] : "#FFF"};
  height: 65px;
  display: flex;
  border-left: ${(props) =>
    props.selected ? `solid 5px ${props.theme.colors.primary[500]}` : ""};
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary[500]};

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary[100]};
    p {
      color: ${(props) => props.theme.colors.primary[500]};
    }
  }
`;

export const SidebarItemTitle = styled.p<SidebarItemProps>`
  color: ${(props) => (props.selected ? "#3c76f1" : "#969696")};
`;
