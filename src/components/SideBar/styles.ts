import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 60px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px 0;
  box-shadow: 0 -1px 8px 0 rgb(0 0 0 / 5%), 0 8px 16px 1px rgb(0 0 0 / 16%);

  a {
    display: none;
  }

  :hover {
    width: 200px;
    position: absolute;
    z-index: 100;

    li {
      justify-content: start;
      align-items: center;
      display: flex;
      gap: 20px;
      padding-left: 13px;

      a {
        display: block;
      }
    }
  }
`;

export const SidebarItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

type SidebarItemProps = {
  selected?: boolean;
  bottom?: boolean;
};

export const SidebarItemContainer = styled.li<SidebarItemProps>`
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary[100] : "transparent"};
  height: 65px;
  display: flex;
  border-left: ${(props) =>
    props.selected
      ? `solid 5px ${props.theme.colors.primary[500]}`
      : `solid 5px transparent`};
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary[500]};
  margin-top: ${(props) => (props.bottom ? "auto" : "inherit")};

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary[100]};

    a {
      color: ${(props) => props.theme.colors.primary[500]};
    }
  }
`;

export const SidebarItemTitle = styled.a<SidebarItemProps>`
  color: ${(props) => (props.selected ? "#3c76f1" : "#969696")};
  font-family: "Smart Finance Bold";
  font-size: 16px;
`;
